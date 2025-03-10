/**
 * Generated by orval v7.6.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { z as zod } from 'zod';
import { stripNill } from './mutators';

export const listPetsQueryParams = zod.object({
  limit: zod
    .string()
    .optional()
    .describe('How many items to return at one time (max 100)'),
});

export const listPetsResponseItem = zod.preprocess(
  stripNill,
  zod
    .discriminatedUnion('breed', [
      zod
        .object({
          cuteness: zod.number(),
          breed: zod.enum(['Labradoodle']),
        })
        .strict(),
      zod
        .object({
          length: zod.number(),
          breed: zod.enum(['Dachshund']),
        })
        .strict(),
    ])
    .or(
      zod
        .object({
          petsRequested: zod.number().optional(),
          type: zod.enum(['cat']),
        })
        .strict(),
    ),
);
export const listPetsResponse = zod.array(listPetsResponseItem);

export const createPetsBodyItem = zod.object({
  name: zod.string(),
  tag: zod.string(),
});
export const createPetsBody = zod.array(createPetsBodyItem);

export const createPetsResponse = zod.preprocess(
  stripNill,
  zod
    .discriminatedUnion('breed', [
      zod
        .object({
          cuteness: zod.number(),
          breed: zod.enum(['Labradoodle']),
        })
        .strict(),
      zod
        .object({
          length: zod.number(),
          breed: zod.enum(['Dachshund']),
        })
        .strict(),
    ])
    .or(
      zod
        .object({
          petsRequested: zod.number().optional(),
          type: zod.enum(['cat']),
        })
        .strict(),
    ),
);

export const updatePetsBody = zod
  .discriminatedUnion('breed', [
    zod.object({
      cuteness: zod.number(),
      breed: zod.enum(['Labradoodle']),
    }),
    zod.object({
      length: zod.number(),
      breed: zod.enum(['Dachshund']),
    }),
  ])
  .or(
    zod.object({
      petsRequested: zod.number().optional(),
      type: zod.enum(['cat']),
    }),
  );

export const updatePetsResponse = zod.preprocess(
  stripNill,
  zod
    .discriminatedUnion('breed', [
      zod
        .object({
          cuteness: zod.number(),
          breed: zod.enum(['Labradoodle']),
        })
        .strict(),
      zod
        .object({
          length: zod.number(),
          breed: zod.enum(['Dachshund']),
        })
        .strict(),
    ])
    .or(
      zod
        .object({
          petsRequested: zod.number().optional(),
          type: zod.enum(['cat']),
        })
        .strict(),
    ),
);

export const showPetByIdParams = zod.object({
  petId: zod.string().describe('The id of the pet to retrieve'),
  testId: zod.string().describe('The id of the pet to retrieve'),
});

export const showPetByIdResponse = zod.preprocess(
  stripNill,
  zod
    .discriminatedUnion('breed', [
      zod
        .object({
          cuteness: zod.number(),
          breed: zod.enum(['Labradoodle']),
        })
        .strict(),
      zod
        .object({
          length: zod.number(),
          breed: zod.enum(['Dachshund']),
        })
        .strict(),
    ])
    .or(
      zod
        .object({
          petsRequested: zod.number().optional(),
          type: zod.enum(['cat']),
        })
        .strict(),
    ),
);
