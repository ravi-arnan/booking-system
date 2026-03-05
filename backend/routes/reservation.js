const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');

const router = express.Router();
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });


// POST /api/reservations - Create a new reservation
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, partySize, date, time, specialRequest } = req.body;

        // Validate required fields
        const errors = {};
        if (!name?.trim()) errors.name = '"name" is required';
        if (!email?.trim()) errors.email = '"email" is required';
        if (!phone?.trim()) errors.phone = '"phone" is required';
        if (!partySize) errors.partySize = '"party_size" is required';
        if (!date) errors.date = '"date" must be a valid date';
        if (!time) errors.time = '"time" is required';

        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ errors });
        }

        // Parse the date
        const reservationDate = new Date(date);
        if (isNaN(reservationDate.getTime())) {
            return res.status(400).json({ errors: { date: '"date" must be a valid date' } });
        }

        // Create reservation in database
        const reservation = await prisma.reservation.create({
            data: {
                name: name.trim(),
                email: email.trim().toLowerCase(),
                phone: phone.trim(),
                partySize: parseInt(partySize, 10),
                date: reservationDate,
                time,
                specialRequest: specialRequest?.trim() || null,
            },
        });

        return res.status(201).json({
            success: true,
            message: 'Reservation confirmed!',
            data: reservation,
        });
    } catch (error) {
        console.error('Error creating reservation:', error);
        return res.status(500).json({ error: 'Failed to create reservation. Please try again.' });
    }
});

// PUT /api/reservations/:id - Update an existing reservation
router.put('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid reservation ID' });
        }

        const { name, email, phone, partySize, date, time, specialRequest } = req.body;

        // Validate required fields
        const errors = {};
        if (!name?.trim()) errors.name = '"name" is required';
        if (!email?.trim()) errors.email = '"email" is required';
        if (!phone?.trim()) errors.phone = '"phone" is required';
        if (!partySize) errors.partySize = '"party_size" is required';
        if (!date) errors.date = '"date" must be a valid date';
        if (!time) errors.time = '"time" is required';

        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ errors });
        }

        // Parse the date
        const reservationDate = new Date(date);
        if (isNaN(reservationDate.getTime())) {
            return res.status(400).json({ errors: { date: '"date" must be a valid date' } });
        }

        // Check if reservation exists
        const existingReservation = await prisma.reservation.findUnique({
            where: { id },
        });

        if (!existingReservation) {
            return res.status(404).json({ error: 'Reservation not found' });
        }

        // Update reservation in database
        const updatedReservation = await prisma.reservation.update({
            where: { id },
            data: {
                name: name.trim(),
                email: email.trim().toLowerCase(),
                phone: phone.trim(),
                partySize: parseInt(partySize, 10),
                date: reservationDate,
                time,
                specialRequest: specialRequest?.trim() || null,
            },
        });

        return res.json({
            success: true,
            message: 'Reservation updated!',
            data: updatedReservation,
        });
    } catch (error) {
        console.error('Error updating reservation:', error);
        return res.status(500).json({ error: 'Failed to update reservation. Please try again.' });
    }
});

// GET /api/reservations - List all reservations (admin use)
router.get('/', async (req, res) => {
    try {
        const reservations = await prisma.reservation.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return res.json({ data: reservations, total: reservations.length });
    } catch (error) {
        console.error('Error fetching reservations:', error);
        return res.status(500).json({ error: 'Failed to fetch reservations.' });
    }
});

module.exports = router;
