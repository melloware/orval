import {
  generateFormDataAndUrlEncodedFunction,
  generateMutatorConfig,
  generateMutatorRequestOptions,
  generateOptions,
  GeneratorDependency,
  GeneratorOptions,
  GeneratorVerbOptions,
  isSyntheticDefaultImportsAllow,
  toObjectString,
  VERBS_WITH_BODY,
  GeneratorMutator,
  GetterResponse,
} from '@orval/core';

export const AXIOS_DEPENDENCIES: GeneratorDependency[] = [
  {
    exports: [
      {
        name: 'axios',
        default: true,
        values: true,
        syntheticDefaultImport: true,
      },
      { name: 'AxiosRequestConfig' },
      { name: 'AxiosResponse' },
      { name: 'AxiosError' },
    ],
    dependency: 'axios',
  },
];

export const generateSwrRequestFunction = (
  {
    headers,
    queryParams,
    operationName,
    response,
    mutator,
    body,
    props,
    verb,
    formData,
    formUrlEncoded,
    override,
    paramsSerializer,
  }: GeneratorVerbOptions,
  { route, context }: GeneratorOptions,
) => {
  const isRequestOptions = override?.requestOptions !== false;
  const isFormData = override?.formData !== false;
  const isFormUrlEncoded = override?.formUrlEncoded !== false;
  const isExactOptionalPropertyTypes =
    !!context.output.tsconfig?.compilerOptions?.exactOptionalPropertyTypes;
  const isBodyVerb = VERBS_WITH_BODY.includes(verb);
  const isSyntheticDefaultImportsAllowed = isSyntheticDefaultImportsAllow(
    context.output.tsconfig,
  );

  const bodyForm = generateFormDataAndUrlEncodedFunction({
    formData,
    formUrlEncoded,
    body,
    isFormData,
    isFormUrlEncoded,
  });

  if (mutator) {
    const mutatorConfig = generateMutatorConfig({
      route,
      body,
      headers,
      queryParams,
      response,
      verb,
      isFormData,
      isFormUrlEncoded,
      hasSignal: false,
      isBodyVerb,
      isExactOptionalPropertyTypes,
    });

    const propsImplementation =
      mutator?.bodyTypeName && body.definition
        ? toObjectString(props, 'implementation').replace(
            new RegExp(`(\\w*):\\s?${body.definition}`),
            `$1: ${mutator.bodyTypeName}<${body.definition}>`,
          )
        : toObjectString(props, 'implementation');

    const requestOptions = isRequestOptions
      ? generateMutatorRequestOptions(
          override?.requestOptions,
          mutator.hasSecondArg,
        )
      : '';

    return `export const ${operationName} = (\n    ${propsImplementation}\n ${
      isRequestOptions && mutator.hasSecondArg
        ? `options${context.output.optionsParamRequired ? '' : '?'}: SecondParameter<typeof ${mutator.name}>`
        : ''
    }) => {${bodyForm}
      return ${mutator.name}<${response.definition.success || 'unknown'}>(
      ${mutatorConfig},
      ${requestOptions});
    }
  `;
  }

  const options = generateOptions({
    route,
    body,
    headers,
    queryParams,
    response,
    verb,
    requestOptions: override?.requestOptions,
    isFormData,
    isFormUrlEncoded,
    paramsSerializer,
    paramsSerializerOptions: override?.paramsSerializerOptions,
    isExactOptionalPropertyTypes,
    hasSignal: false,
  });

  return `export const ${operationName} = (\n    ${toObjectString(
    props,
    'implementation',
  )} ${
    isRequestOptions ? `options?: AxiosRequestConfig\n` : ''
  } ): Promise<AxiosResponse<${
    response.definition.success || 'unknown'
  }>> => {${bodyForm}
    return axios${
      !isSyntheticDefaultImportsAllowed ? '.default' : ''
    }.${verb}(${options});
  }
`;
};

export const getSwrRequestOptions = (mutator?: GeneratorMutator) => {
  if (!mutator) {
    return `axios?: AxiosRequestConfig`;
  } else if (mutator?.hasSecondArg) {
    return `request?: SecondParameter<typeof ${mutator.name}>`;
  } else {
    return '';
  }
};

export const getSwrErrorType = (
  response: GetterResponse,
  mutator?: GeneratorMutator,
) => {
  if (mutator) {
    return mutator.hasErrorType
      ? `ErrorType<${response.definition.errors || 'unknown'}>`
      : response.definition.errors || 'unknown';
  } else {
    return `AxiosError<${response.definition.errors || 'unknown'}>`;
  }
};

export const getSwrRequestSecondArg = (mutator?: GeneratorMutator) => {
  if (!mutator) {
    return `axios: axiosOptions`;
  } else if (mutator?.hasSecondArg) {
    return 'request: requestOptions';
  } else {
    return '';
  }
};

export const getHttpRequestSecondArg = (mutator?: GeneratorMutator) => {
  if (!mutator) {
    return `axiosOptions`;
  } else if (mutator?.hasSecondArg) {
    return 'requestOptions';
  } else {
    return '';
  }
};

export const getSwrMutationFetcherOptionType = (mutator?: GeneratorMutator) => {
  if (!mutator) {
    return 'AxiosRequestConfig';
  } else if (mutator.hasSecondArg) {
    return `SecondParameter<typeof ${mutator.name}>`;
  } else {
    return '';
  }
};

export const getSwrMutationFetcherType = (
  response: GetterResponse,
  mutator?: GeneratorMutator,
) => {
  return mutator
    ? `Promise<${response.definition.success || 'unknown'}>`
    : `Promise<AxiosResponse<${response.definition.success || 'unknown'}>>`;
};
