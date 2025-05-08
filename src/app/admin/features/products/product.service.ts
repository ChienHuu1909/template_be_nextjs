import { PrismaClient, Product } from '@prisma/client';
import { CreateProductDTO } from './product.types';

const prisma = new PrismaClient();

export const getAllProducts = async (): Promise<Product[]> => {
    return prisma.product.findMany({
        orderBy: { createdAt: 'desc' },
    });
};

export const createProduct = async (data: CreateProductDTO): Promise<Product> => {
    return prisma.product.create({
        data: {
            name: data.name,
            description: data.description,
            price: data.price,
            stock: data.stock ?? 0,
        },
    });
};

export const getProductById = async (id: number): Promise<Product | null> => {
    return prisma.product.findUnique({
        where: { id },
    });
};

export const deleteProduct = async (id: number): Promise<Product> => {
    return prisma.product.delete({
        where: { id },
    });
};
