/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CreateCategoryDto {
  /**
   * @minLength 1
   * @maxLength 150
   */
  title: string;
}

export interface CreateCommentDto {
  /** @maxLength 1500 */
  body?: string | null;
  /** @format double */
  rating: number;
  /** @minLength 1 */
  doctorId: string;
}

/** @format int32 */
export enum Gender {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
}

export interface GetAllCategoriesDto {
  /** @format int32 */
  id?: number;
  title?: string | null;
}

export interface GetAllCitiesDto {
  cityName?: string | null;
}

export interface GetAllCommentsDto {
  /** @format int64 */
  id?: number;
  body?: string | null;
  authorFirstName?: string | null;
  authorLastName?: string | null;
  /** @format date-time */
  createdAt?: string;
  /** @format double */
  rating?: number;
}

export interface GetAllCommentsDtoPagedList {
  /** @format int32 */
  totalItems?: number;
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  list?: GetAllCommentsDto[] | null;
  /** @format int32 */
  totalPages?: number;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
  /** @format int32 */
  nextPageNumber?: number;
  /** @format int32 */
  previousPageNumber?: number;
}

export interface GetAllDoctorByBestRatingDto {
  doctorId?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  categoryTitle?: string | null;
  address?: string | null;
  city?: string | null;
  /** @format double */
  rating?: number | null;
}

export interface GetAllDoctorByBestRatingForTheSearchBarDto {
  address?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  doctorId?: string | null;
  categoryTitle?: string | null;
  /** @format double */
  rating?: number | null;
  city?: string | null;
  insurances?: string[] | null;
}

export interface GetAllDoctorByBestRatingForTheSearchBarDtoPagedList {
  /** @format int32 */
  totalItems?: number;
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  list?: GetAllDoctorByBestRatingForTheSearchBarDto[] | null;
  /** @format int32 */
  totalPages?: number;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
  /** @format int32 */
  nextPageNumber?: number;
  /** @format int32 */
  previousPageNumber?: number;
}

export interface GetAllInsurancesDto {
  /** @format int32 */
  id?: number;
  title?: string | null;
}

export interface GetCategoryDto {
  /** @format int32 */
  id?: number;
  title?: string | null;
}

export interface GetDoctorInfoDto {
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  categotyTitle?: string | null;
  address?: string | null;
  city?: string | null;
  /** @format double */
  rating?: number | null;
  insurances?: string[] | null;
}

export interface GetPossibleSessionInDayForDoctorDto {
  /** @format date-time */
  sessionDate?: string;
  /** @format date-time */
  sessionStartTime?: string;
  /** @format date-time */
  sessionEndTime?: string;
  /** @format double */
  sessionPrice?: number;
  status?: SessionStatus;
}

export interface RegisterDoctorDto {
  /**
   * @minLength 1
   * @maxLength 150
   */
  firstName: string;
  /**
   * @minLength 1
   * @maxLength 150
   */
  lastName: string;
  /** @maxLength 1500 */
  address?: string | null;
  /** @format date-time */
  birthDate?: string;
  /**
   * @minLength 1
   * @maxLength 10
   */
  nationalCode: string;
  gender: Gender;
  /** @format int32 */
  categoryId?: number;
  /**
   * @minLength 1
   * @maxLength 150
   */
  email: string;
  /**
   * @minLength 1
   * @maxLength 11
   */
  mobileNumber: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  password: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  confirmPassword: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  city: string;
  /** @maxLength 1000 */
  shortDescription?: string | null;
  /** @uniqueItems true */
  insuranceIds?: number[] | null;
}

export interface RegisterDoctorWorkPlaneDto {
  /** @format double */
  pricePerSession: number;
  /** @format date-time */
  duration: string;
  /** @format date-time */
  startOfWorkingHour: string;
  /** @format date-time */
  endOfWorkingHour: string;
  /** @format date-time */
  breakAfterEverySession: string;
}

export interface RegisterPatientDto {
  /**
   * @format email
   * @minLength 1
   * @maxLength 250
   */
  username: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  password: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  confirmPassword: string;
}

/** @format int32 */
export enum SessionStatus {
  Value1 = 1,
  Value2 = 2,
}

export interface UserLoginDto {
  /**
   * @minLength 1
   * @maxLength 50
   */
  userName: string;
  /**
   * @minLength 1
   * @maxLength 50
   */
  password: string;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Appiontment Api
 * @version v1
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  login = {
    /**
     * No description
     *
     * @tags Account
     * @name LoginCreate
     * @request POST:/login
     * @secure
     */
    loginCreate: (data: UserLoginDto, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/login`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  register = {
    /**
     * No description
     *
     * @tags Account
     * @name RegisterCreate
     * @request POST:/register
     * @secure
     */
    registerCreate: (data: RegisterPatientDto, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/register`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  activation = {
    /**
     * No description
     *
     * @tags Account
     * @name ActivationList
     * @request GET:/Activation
     * @secure
     */
    activationList: (
      query?: {
        userId?: string;
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<string, any>({
        path: `/Activation`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  addBlog = {
    /**
     * No description
     *
     * @tags Blogs
     * @name AddBlogCreate
     * @request POST:/add-blog
     * @secure
     */
    addBlogCreate: (
      query: {
        /** @maxLength 100 */
        Title: string;
        /** @maxLength 1500 */
        Body: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/add-blog`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),
  };
  createCategory = {
    /**
     * No description
     *
     * @tags Category
     * @name CreateCategoryCreate
     * @request POST:/create-category
     * @secure
     */
    createCategoryCreate: (data: CreateCategoryDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/create-category`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  getAllCategories = {
    /**
     * No description
     *
     * @tags Category
     * @name GetAllCategoriesList
     * @request GET:/get-all-categories
     * @secure
     */
    getAllCategoriesList: (
      query?: {
        Title?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAllCategoriesDto[], any>({
        path: `/get-all-categories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  editCategory = {
    /**
     * No description
     *
     * @tags Category
     * @name EditCategoryUpdate
     * @request PUT:/edit-category/{id}
     * @secure
     */
    editCategoryUpdate: (
      id: string,
      query: {
        /** @maxLength 150 */
        Title: string;
      },
      data: number,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/edit-category/${id}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  getCategory = {
    /**
     * No description
     *
     * @tags Category
     * @name GetCategoryDetail
     * @request GET:/get-category/{id}
     * @secure
     */
    getCategoryDetail: (id: number, params: RequestParams = {}) =>
      this.request<GetCategoryDto, any>({
        path: `/get-category/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  deleteCategory = {
    /**
     * No description
     *
     * @tags Category
     * @name DeleteCategoryDelete
     * @request DELETE:/delete-category/{id}
     * @secure
     */
    deleteCategoryDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delete-category/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  createComment = {
    /**
     * No description
     *
     * @tags Comment
     * @name CreateCommentCreate
     * @request POST:/create-comment
     * @secure
     */
    createCommentCreate: (data: CreateCommentDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/create-comment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  getAllComments = {
    /**
     * No description
     *
     * @tags Comment
     * @name GetAllCommentsDetail
     * @request GET:/get-all-comments/{doctorId}
     * @secure
     */
    getAllCommentsDetail: (
      doctorId: string,
      query?: {
        /** @format int32 */
        PageNumber?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAllCommentsDtoPagedList, any>({
        path: `/get-all-comments/${doctorId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  registerDoctor = {
    /**
     * No description
     *
     * @tags Doctors
     * @name RegisterDoctorCreate
     * @request POST:/register-doctor
     * @secure
     */
    registerDoctorCreate: (data: RegisterDoctorDto, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/register-doctor`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getDoctorInfo = {
    /**
     * No description
     *
     * @tags Doctors
     * @name GetDoctorInfoDetail
     * @request GET:/get-doctor-info/{doctorId}
     * @secure
     */
    getDoctorInfoDetail: (doctorId: string, params: RequestParams = {}) =>
      this.request<GetDoctorInfoDto, any>({
        path: `/get-doctor-info/${doctorId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  getBestDoctorByHighestRanting = {
    /**
     * No description
     *
     * @tags Doctors
     * @name GetBestDoctorByHighestRantingList
     * @request GET:/get-best-doctor-by-highest-ranting
     * @secure
     */
    getBestDoctorByHighestRantingList: (params: RequestParams = {}) =>
      this.request<GetAllDoctorByBestRatingDto[], any>({
        path: `/get-best-doctor-by-highest-ranting`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  getAllCities = {
    /**
     * No description
     *
     * @tags Doctors
     * @name GetAllCitiesList
     * @request GET:/get-all-cities
     * @secure
     */
    getAllCitiesList: (
      query?: {
        Title?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAllCitiesDto[], any>({
        path: `/get-all-cities`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  getBestDoctorByHighestRaingForSearchBar = {
    /**
     * No description
     *
     * @tags Doctors
     * @name GetBestDoctorByHighestRaingForSearchBarList
     * @request GET:/get-best-doctor-by-highest-raing-for-search-bar
     * @secure
     */
    getBestDoctorByHighestRaingForSearchBarList: (
      query?: {
        /** @format int32 */
        PageNumber?: number;
        /** @format int32 */
        PageSize?: number;
        City?: string;
        Insurance?: string;
        Category?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAllDoctorByBestRatingForTheSearchBarDtoPagedList, any>({
        path: `/get-best-doctor-by-highest-raing-for-search-bar`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  registerDoctorWorkPlan = {
    /**
     * No description
     *
     * @tags DoctorWorkPlans
     * @name RegisterDoctorWorkPlanCreate
     * @request POST:/register-doctor-work-plan
     * @secure
     */
    registerDoctorWorkPlanCreate: (data: RegisterDoctorWorkPlaneDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/register-doctor-work-plan`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  getAllInsurances = {
    /**
     * No description
     *
     * @tags Insurances
     * @name GetAllInsurancesList
     * @request GET:/get-all-insurances
     * @secure
     */
    getAllInsurancesList: (
      query?: {
        Title?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAllInsurancesDto[], any>({
        path: `/get-all-insurances`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  getPossibleSession = {
    /**
     * No description
     *
     * @tags Sessions
     * @name GetPossibleSessionList
     * @request GET:/get-possible-session
     * @secure
     */
    getPossibleSessionList: (
      query: {
        /** @format date-time */
        DayDate: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetPossibleSessionInDayForDoctorDto[], any>({
        path: `/get-possible-session`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
