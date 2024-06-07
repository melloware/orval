/**
 * Generated by orval v6.30.1 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useSuspenseInfiniteQuery,
  useSuspenseQuery,
} from '@tanstack/react-query';
import type {
  InfiniteData,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
  UseSuspenseInfiniteQueryOptions,
  UseSuspenseInfiniteQueryResult,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';
import type {
  CreatePetsBody,
  Error,
  ListPetsNestedArrayParams,
  ListPetsParams,
  Pet,
  PetsArray,
  PetsNestedArray,
} from '../model';
import { customInstance } from '../mutator/custom-instance';
import type { ErrorType } from '../mutator/custom-instance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * @summary List all pets
 */
const listPets = (params?: ListPetsParams, version: number = 1) => {
  return customInstance<PetsArray>({
    url: `/v${version}/pets`,
    method: 'GET',
    params,
  });
};

const getListPetsQueryKey = (params?: ListPetsParams, version: number = 1) => {
  return [`/v${version}/pets`, ...(params ? [params] : [])] as const;
};

export const getListPetsInfiniteQueryOptions = <
  TData = InfiniteData<
    Awaited<ReturnType<typeof listPets>>,
    ListPetsParams['limit']
  >,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version: number = 1,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof listPets>>,
        TError,
        TData,
        Awaited<ReturnType<typeof listPets>>,
        QueryKey,
        ListPetsParams['limit']
      >
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getListPetsQueryKey(params, version);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof listPets>>,
    QueryKey,
    ListPetsParams['limit']
  > = ({ pageParam }) =>
    listPets({ ...params, limit: pageParam || params?.['limit'] }, version);

  return {
    queryKey,
    queryFn,
    enabled: !!version,
    ...queryOptions,
  } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof listPets>>,
    TError,
    TData,
    Awaited<ReturnType<typeof listPets>>,
    QueryKey,
    ListPetsParams['limit']
  > & { queryKey: QueryKey };
};

export type ListPetsInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPets>>
>;
export type ListPetsInfiniteQueryError = ErrorType<Error>;

/**
 * @summary List all pets
 */
export const useListPetsInfinite = <
  TData = InfiniteData<
    Awaited<ReturnType<typeof listPets>>,
    ListPetsParams['limit']
  >,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version: number = 1,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof listPets>>,
        TError,
        TData,
        Awaited<ReturnType<typeof listPets>>,
        QueryKey,
        ListPetsParams['limit']
      >
    >;
  },
): UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getListPetsInfiniteQueryOptions(
    params,
    version,
    options,
  );

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const getListPetsQueryOptions = <
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version: number = 1,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getListPetsQueryKey(params, version);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof listPets>>> = () =>
    listPets(params, version);

  return {
    queryKey,
    queryFn,
    enabled: !!version,
    ...queryOptions,
  } as UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData> & {
    queryKey: QueryKey;
  };
};

export type ListPetsQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPets>>
>;
export type ListPetsQueryError = ErrorType<Error>;

/**
 * @summary List all pets
 */
export const useListPets = <
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version: number = 1,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getListPetsQueryOptions(params, version, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const getListPetsSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version: number = 1,
  options?: {
    query?: Partial<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof listPets>>,
        TError,
        TData
      >
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getListPetsQueryKey(params, version);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof listPets>>> = () =>
    listPets(params, version);

  return {
    queryKey,
    queryFn,
    enabled: !!version,
    ...queryOptions,
  } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof listPets>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type ListPetsSuspenseQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPets>>
>;
export type ListPetsSuspenseQueryError = ErrorType<Error>;

/**
 * @summary List all pets
 */
export const useListPetsSuspense = <
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version: number = 1,
  options?: {
    query?: Partial<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof listPets>>,
        TError,
        TData
      >
    >;
  },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getListPetsSuspenseQueryOptions(
    params,
    version,
    options,
  );

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const getListPetsSuspenseInfiniteQueryOptions = <
  TData = InfiniteData<
    Awaited<ReturnType<typeof listPets>>,
    ListPetsParams['limit']
  >,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version: number = 1,
  options?: {
    query?: Partial<
      UseSuspenseInfiniteQueryOptions<
        Awaited<ReturnType<typeof listPets>>,
        TError,
        TData,
        Awaited<ReturnType<typeof listPets>>,
        QueryKey,
        ListPetsParams['limit']
      >
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getListPetsQueryKey(params, version);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof listPets>>,
    QueryKey,
    ListPetsParams['limit']
  > = ({ pageParam }) =>
    listPets({ ...params, limit: pageParam || params?.['limit'] }, version);

  return {
    queryKey,
    queryFn,
    enabled: !!version,
    ...queryOptions,
  } as UseSuspenseInfiniteQueryOptions<
    Awaited<ReturnType<typeof listPets>>,
    TError,
    TData,
    Awaited<ReturnType<typeof listPets>>,
    QueryKey,
    ListPetsParams['limit']
  > & { queryKey: QueryKey };
};

export type ListPetsSuspenseInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPets>>
>;
export type ListPetsSuspenseInfiniteQueryError = ErrorType<Error>;

/**
 * @summary List all pets
 */
export const useListPetsSuspenseInfinite = <
  TData = InfiniteData<
    Awaited<ReturnType<typeof listPets>>,
    ListPetsParams['limit']
  >,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version: number = 1,
  options?: {
    query?: Partial<
      UseSuspenseInfiniteQueryOptions<
        Awaited<ReturnType<typeof listPets>>,
        TError,
        TData,
        Awaited<ReturnType<typeof listPets>>,
        QueryKey,
        ListPetsParams['limit']
      >
    >;
  },
): UseSuspenseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getListPetsSuspenseInfiniteQueryOptions(
    params,
    version,
    options,
  );

  const query = useSuspenseInfiniteQuery(
    queryOptions,
  ) as UseSuspenseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Create a pet
 */
const createPets = (createPetsBody: CreatePetsBody, version: number = 1) => {
  return customInstance<void>({
    url: `/v${version}/pets`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: createPetsBody,
  });
};

export const getCreatePetsMutationOptions = <
  TError = ErrorType<Error>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPets>>,
    TError,
    { data: CreatePetsBody; version?: number },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof createPets>>,
  TError,
  { data: CreatePetsBody; version?: number },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createPets>>,
    { data: CreatePetsBody; version?: number }
  > = (props) => {
    const { data, version } = props ?? {};

    return createPets(data, version);
  };

  return { mutationFn, ...mutationOptions };
};

export type CreatePetsMutationResult = NonNullable<
  Awaited<ReturnType<typeof createPets>>
>;
export type CreatePetsMutationBody = CreatePetsBody;
export type CreatePetsMutationError = ErrorType<Error>;

/**
 * @summary Create a pet
 */
export const useCreatePets = <
  TError = ErrorType<Error>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPets>>,
    TError,
    { data: CreatePetsBody; version?: number },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<typeof createPets>>,
  TError,
  { data: CreatePetsBody; version?: number },
  TContext
> => {
  const mutationOptions = getCreatePetsMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * @summary List all pets as nested array
 */
const listPetsNestedArray = (
  params?: ListPetsNestedArrayParams,
  version: number = 1,
) => {
  return customInstance<PetsNestedArray>({
    url: `/v${version}/pets-nested-array`,
    method: 'GET',
    params,
  });
};

const getListPetsNestedArrayQueryKey = (
  params?: ListPetsNestedArrayParams,
  version: number = 1,
) => {
  return [
    `/v${version}/pets-nested-array`,
    ...(params ? [params] : []),
  ] as const;
};

export const getListPetsNestedArrayQueryOptions = <
  TData = Awaited<ReturnType<typeof listPetsNestedArray>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsNestedArrayParams,
  version: number = 1,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof listPetsNestedArray>>,
        TError,
        TData
      >
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getListPetsNestedArrayQueryKey(params, version);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof listPetsNestedArray>>
  > = () => listPetsNestedArray(params, version);

  return {
    queryKey,
    queryFn,
    enabled: !!version,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof listPetsNestedArray>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type ListPetsNestedArrayQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPetsNestedArray>>
>;
export type ListPetsNestedArrayQueryError = ErrorType<Error>;

/**
 * @summary List all pets as nested array
 */
export const useListPetsNestedArray = <
  TData = Awaited<ReturnType<typeof listPetsNestedArray>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsNestedArrayParams,
  version: number = 1,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof listPetsNestedArray>>,
        TError,
        TData
      >
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getListPetsNestedArrayQueryOptions(
    params,
    version,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Info for a specific pet
 */
const showPetById = (petId: string, version: number = 1) => {
  return customInstance<Pet>({
    url: `/v${version}/pets/${petId}`,
    method: 'GET',
  });
};

const getShowPetByIdQueryKey = (petId: string, version: number = 1) => {
  return [`/v${version}/pets/${petId}`] as const;
};

export const getShowPetByIdQueryOptions = <
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = ErrorType<Error>,
>(
  petId: string,
  version: number = 1,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getShowPetByIdQueryKey(petId, version);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof showPetById>>> = () =>
    showPetById(petId, version);

  return {
    queryKey,
    queryFn,
    enabled: !!(version && petId),
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
export type ShowPetByIdQueryError = ErrorType<Error>;

/**
 * @summary Info for a specific pet
 */
export const useShowPetById = <
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = ErrorType<Error>,
>(
  petId: string,
  version: number = 1,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getShowPetByIdQueryOptions(petId, version, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};
