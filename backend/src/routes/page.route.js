import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import Appointment from "../models/appointment.model.js";
import { upload } from "../utils/multer.js";

const router = express.Router();

// ======== TOKEN VERIFY MIDDLEWARE ========
const verifyToken = (req, res, next) => {
    let token = null;

    // Check Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
        token = req.headers.authorization.split(" ")[1];
    }

    // Check query param (for Thunder Client testing)
    if (!token && req.query.token) {
        token = req.query.token;
    }

    // Check request body (for Thunder Client raw JSON testing)
    if (!token && req.body.token) {
        token = req.body.token;
    }

    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id || decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or malformed token" });
    }
};

// ================= UPDATE PROFILE =================
router.put("/update-profile", verifyToken, upload.single("avatar"), async (req, res) => {
    try {
        let updateData = { ...req.body };

        if (req.body.password) {
            updateData.password = await bcrypt.hash(req.body.password, 10);
        }

        if (req.file) {
            updateData.avatar = req.file.path;
        }

        const updatedUser = await User.findByIdAndUpdate(req.userId, updateData, {
            new: true,
            runValidators: true
        }).select("-password");

        if (!updatedUser) return res.status(404).json({ message: "User not found" });

        res.status(200).json({
            message: "Profile updated successfully",
            user: updatedUser
        });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// ================= REGISTER =================
router.post("/register", async (req, res) => {
    try {
        const {
            fullname, age, gender, phone, email, address, city, postalcode, password,
            bloodgroup, weight, allergies, medicalhistory, medications, surgeries,
            familyhistory, lifestyle, idproof, prescription, emergencycontactname,
            relationship, emergencycontactphone
        } = req.body;

        if (!email) return res.status(400).json({ message: "Email is required" });
        if (!password) return res.status(400).json({ message: "Password is required" });

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            fullname, age, gender, phone, email, address, city, postalcode,
            password: hashedPassword, bloodgroup, weight, allergies, medicalhistory,
            medications, surgeries, familyhistory, lifestyle, idproof, prescription,
            emergencycontactname, relationship, emergencycontactphone
        });

        res.status(201).json({
            message: "User registered successfully",
            user: { id: newUser._id, email: newUser.email, fullname: newUser.fullname }
        });

    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

// ================= LOGIN =================
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({ message: "User login successfully", token });

    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

// ================= BOOK APPOINTMENT =================
router.post("/appointments", verifyToken, async (req, res) => {
    try {
        const { doctorName, date, time, reason } = req.body;
        if (!doctorName || !date || !time) {
            return res.status(400).json({ message: "Doctor name, date, and time are required" });
        }

        const appointment = await Appointment.create({
            user: req.userId,
            doctorName,
            date,
            time,
            reason
        });

        res.status(201).json({ message: "Appointment booked successfully", appointment });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// ================= GET USER APPOINTMENTS =================
router.get("/appointments", verifyToken, async (req, res) => {
    try {
        const appointments = await Appointment.find({ user: req.userId });
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

export { router };
