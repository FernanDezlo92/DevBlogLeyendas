import { defineCollection, z } from 'astro:content';

const books = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(),
        date: z.date(),
        description: z.string(),
        tags: z.array(z.string()),
        buy: z.array(
            z.object({
                spain: z.string(),
                latinoamerica: z.string(),
            })
        ),
    }),
});


const article = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(),
        date: z.date(),
        description: z.string(),
        tags: z.array(z.string()), 
        content: z.string(), 
        summary: z.string().optional(),  
        category: z.string().optional(),   
    }),
});


export const collection = { books, article };