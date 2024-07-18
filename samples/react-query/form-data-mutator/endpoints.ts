/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { useMutation, useQuery } from 'react-query';
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query';
import type {
  CreatePetsBody,
  Error,
  ListPetsNestedArrayParams,
  ListPetsParams,
  Pet,
  PetsArray,
  PetsNestedArray,
} from './models';
import { customInstance } from './custom-instance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * @summary List all pets
 */
export const listPets = (params?: ListPetsParams, signal?: AbortSignal) => {
  return customInstance<PetsArray>({
    url: `/pets`,
    method: 'GET',
    params,
    signal,
  });
};

export const getListPetsQueryKey = (params?: ListPetsParams) => {
  return [`/pets`, ...(params ? [params] : [])] as const;
};

export const getListPetsQueryOptions = <
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = Error,
>(
  params?: ListPetsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof listPets>>,
      TError,
      TData
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getListPetsQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof listPets>>> = ({
    signal,
  }) => listPets(params, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof listPets>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type ListPetsQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPets>>
>;
export type ListPetsQueryError = Error;

/**
 * @summary List all pets
 */

export function useListPets<
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = Error,
>(
  params?: ListPetsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof listPets>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getListPetsQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * @summary Create a pet
 */
export const createPets = (createPetsBody: CreatePetsBody) => {
  return customInstance<void>({
    url: `/pets`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: createPetsBody,
  });
};

export const getCreatePetsMutationOptions = <
  TError = Error,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPets>>,
    TError,
    { data: CreatePetsBody },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof createPets>>,
  TError,
  { data: CreatePetsBody },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createPets>>,
    { data: CreatePetsBody }
  > = (props) => {
    const { data } = props ?? {};

    return createPets(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type CreatePetsMutationResult = NonNullable<
  Awaited<ReturnType<typeof createPets>>
>;
export type CreatePetsMutationBody = CreatePetsBody;
export type CreatePetsMutationError = Error;

/**
 * @summary Create a pet
 */
export const useCreatePets = <TError = Error, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPets>>,
    TError,
    { data: CreatePetsBody },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<typeof createPets>>,
  TError,
  { data: CreatePetsBody },
  TContext
> => {
  const mutationOptions = getCreatePetsMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * @summary List all pets as nested array
 */
export const listPetsNestedArray = (
  params?: ListPetsNestedArrayParams,
  signal?: AbortSignal,
) => {
  return customInstance<PetsNestedArray>({
    url: `/pets-nested-array`,
    method: 'GET',
    params,
    signal,
  });
};

export const getListPetsNestedArrayQueryKey = (
  params?: ListPetsNestedArrayParams,
) => {
  return [`/pets-nested-array`, ...(params ? [params] : [])] as const;
};

export const getListPetsNestedArrayQueryOptions = <
  TData = Awaited<ReturnType<typeof listPetsNestedArray>>,
  TError = Error,
>(
  params?: ListPetsNestedArrayParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof listPetsNestedArray>>,
      TError,
      TData
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getListPetsNestedArrayQueryKey(params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof listPetsNestedArray>>
  > = ({ signal }) => listPetsNestedArray(params, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof listPetsNestedArray>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type ListPetsNestedArrayQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPetsNestedArray>>
>;
export type ListPetsNestedArrayQueryError = Error;

/**
 * @summary List all pets as nested array
 */

export function useListPetsNestedArray<
  TData = Awaited<ReturnType<typeof listPetsNestedArray>>,
  TError = Error,
>(
  params?: ListPetsNestedArrayParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof listPetsNestedArray>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getListPetsNestedArrayQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * @summary Info for a specific pet
 */
export const showPetById = (petId: string, signal?: AbortSignal) => {
  return customInstance<Pet>({ url: `/pets/${petId}`, method: 'GET', signal });
};

export const getShowPetByIdQueryKey = (petId: string) => {
  return [`/pets/${petId}`] as const;
};

export const getShowPetByIdQueryOptions = <
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = Error,
>(
  petId: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof showPetById>>,
      TError,
      TData
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getShowPetByIdQueryKey(petId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof showPetById>>> = ({
    signal,
  }) => showPetById(petId, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!petId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof showPetById>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type ShowPetByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof showPetById>>
>;
export type ShowPetByIdQueryError = Error;

/**
 * @summary Info for a specific pet
 */

export function useShowPetById<
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = Error,
>(
  petId: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof showPetById>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getShowPetByIdQueryOptions(petId, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}
