"use server";

import { RegisterSchema, RegisterSchemaType } from "@/app/register";
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function registerUser(data: RegisterSchemaType) {
    const validatedData = RegisterSchema.parse(data);
    const hash = await bcrypt.hashSync(validatedData.password, 10);
	return prisma.user.create({
		data: {
			name: validatedData.name,
			email: validatedData.email,
			password: hash,
		},
	});
}