/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as Context from "../context"
import { core } from "@nexus/schema"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    date<FieldName extends string>(fieldName: FieldName, opts?: core.ScalarInputFieldConfig<core.GetGen3<"inputTypes", TypeName, FieldName>>): void // "Date";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Date";
  }
}
declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  BookCreateInput: { // input type
    author?: NexusGenInputs['UserCreateOneWithoutBooksInput'] | null; // UserCreateOneWithoutBooksInput
    chapters?: NexusGenInputs['ChapterCreateManyWithoutBookInput'] | null; // ChapterCreateManyWithoutBookInput
    coAuthors?: NexusGenInputs['UserCreateManyWithoutBookInput'] | null; // UserCreateManyWithoutBookInput
    createdAt?: any | null; // DateTime
    id?: string | null; // String
    published?: boolean | null; // Boolean
    tags?: NexusGenInputs['TagCreateManyWithoutBooksInput'] | null; // TagCreateManyWithoutBooksInput
    title: string; // String!
    updatedAt?: any | null; // DateTime
  }
  BookCreateManyWithoutAuthorInput: { // input type
    connect?: NexusGenInputs['BookWhereUniqueInput'][] | null; // [BookWhereUniqueInput!]
    create?: NexusGenInputs['BookCreateWithoutAuthorInput'][] | null; // [BookCreateWithoutAuthorInput!]
  }
  BookCreateManyWithoutTagsInput: { // input type
    connect?: NexusGenInputs['BookWhereUniqueInput'][] | null; // [BookWhereUniqueInput!]
    create?: NexusGenInputs['BookCreateWithoutTagsInput'][] | null; // [BookCreateWithoutTagsInput!]
  }
  BookCreateOneWithoutChaptersInput: { // input type
    connect?: NexusGenInputs['BookWhereUniqueInput'] | null; // BookWhereUniqueInput
    create?: NexusGenInputs['BookCreateWithoutChaptersInput'] | null; // BookCreateWithoutChaptersInput
  }
  BookCreateOneWithoutCoAuthorsInput: { // input type
    connect?: NexusGenInputs['BookWhereUniqueInput'] | null; // BookWhereUniqueInput
    create?: NexusGenInputs['BookCreateWithoutCoAuthorsInput'] | null; // BookCreateWithoutCoAuthorsInput
  }
  BookCreateWithoutAuthorInput: { // input type
    chapters?: NexusGenInputs['ChapterCreateManyWithoutBookInput'] | null; // ChapterCreateManyWithoutBookInput
    coAuthors?: NexusGenInputs['UserCreateManyWithoutBookInput'] | null; // UserCreateManyWithoutBookInput
    createdAt?: any | null; // DateTime
    id?: string | null; // String
    published?: boolean | null; // Boolean
    tags?: NexusGenInputs['TagCreateManyWithoutBooksInput'] | null; // TagCreateManyWithoutBooksInput
    title: string; // String!
    updatedAt?: any | null; // DateTime
  }
  BookCreateWithoutChaptersInput: { // input type
    author?: NexusGenInputs['UserCreateOneWithoutBooksInput'] | null; // UserCreateOneWithoutBooksInput
    coAuthors?: NexusGenInputs['UserCreateManyWithoutBookInput'] | null; // UserCreateManyWithoutBookInput
    createdAt?: any | null; // DateTime
    id?: string | null; // String
    published?: boolean | null; // Boolean
    tags?: NexusGenInputs['TagCreateManyWithoutBooksInput'] | null; // TagCreateManyWithoutBooksInput
    title: string; // String!
    updatedAt?: any | null; // DateTime
  }
  BookCreateWithoutCoAuthorsInput: { // input type
    author?: NexusGenInputs['UserCreateOneWithoutBooksInput'] | null; // UserCreateOneWithoutBooksInput
    chapters?: NexusGenInputs['ChapterCreateManyWithoutBookInput'] | null; // ChapterCreateManyWithoutBookInput
    createdAt?: any | null; // DateTime
    id?: string | null; // String
    published?: boolean | null; // Boolean
    tags?: NexusGenInputs['TagCreateManyWithoutBooksInput'] | null; // TagCreateManyWithoutBooksInput
    title: string; // String!
    updatedAt?: any | null; // DateTime
  }
  BookCreateWithoutTagsInput: { // input type
    author?: NexusGenInputs['UserCreateOneWithoutBooksInput'] | null; // UserCreateOneWithoutBooksInput
    chapters?: NexusGenInputs['ChapterCreateManyWithoutBookInput'] | null; // ChapterCreateManyWithoutBookInput
    coAuthors?: NexusGenInputs['UserCreateManyWithoutBookInput'] | null; // UserCreateManyWithoutBookInput
    createdAt?: any | null; // DateTime
    id?: string | null; // String
    published?: boolean | null; // Boolean
    title: string; // String!
    updatedAt?: any | null; // DateTime
  }
  BookWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  ChapterCreateManyWithoutAuthorInput: { // input type
    connect?: NexusGenInputs['ChapterWhereUniqueInput'][] | null; // [ChapterWhereUniqueInput!]
    create?: NexusGenInputs['ChapterCreateWithoutAuthorInput'][] | null; // [ChapterCreateWithoutAuthorInput!]
  }
  ChapterCreateManyWithoutBookInput: { // input type
    connect?: NexusGenInputs['ChapterWhereUniqueInput'][] | null; // [ChapterWhereUniqueInput!]
    create?: NexusGenInputs['ChapterCreateWithoutBookInput'][] | null; // [ChapterCreateWithoutBookInput!]
  }
  ChapterCreateManyWithoutCoAuthorsInput: { // input type
    connect?: NexusGenInputs['ChapterWhereUniqueInput'][] | null; // [ChapterWhereUniqueInput!]
    create?: NexusGenInputs['ChapterCreateWithoutCoAuthorsInput'][] | null; // [ChapterCreateWithoutCoAuthorsInput!]
  }
  ChapterCreateManyWithoutTagsInput: { // input type
    connect?: NexusGenInputs['ChapterWhereUniqueInput'][] | null; // [ChapterWhereUniqueInput!]
    create?: NexusGenInputs['ChapterCreateWithoutTagsInput'][] | null; // [ChapterCreateWithoutTagsInput!]
  }
  ChapterCreateOneWithoutChapterLinksFromInput: { // input type
    connect?: NexusGenInputs['ChapterWhereUniqueInput'] | null; // ChapterWhereUniqueInput
    create?: NexusGenInputs['ChapterCreateWithoutChapterLinksFromInput'] | null; // ChapterCreateWithoutChapterLinksFromInput
  }
  ChapterCreateOneWithoutChapterLinksToInput: { // input type
    connect?: NexusGenInputs['ChapterWhereUniqueInput'] | null; // ChapterWhereUniqueInput
    create?: NexusGenInputs['ChapterCreateWithoutChapterLinksToInput'] | null; // ChapterCreateWithoutChapterLinksToInput
  }
  ChapterCreateWithoutAuthorInput: { // input type
    book?: NexusGenInputs['BookCreateOneWithoutChaptersInput'] | null; // BookCreateOneWithoutChaptersInput
    chapterLinksFrom?: NexusGenInputs['ChapterLinkCreateManyWithoutFromChapterInput'] | null; // ChapterLinkCreateManyWithoutFromChapterInput
    chapterLinksTo?: NexusGenInputs['ChapterLinkCreateManyWithoutToChapterInput'] | null; // ChapterLinkCreateManyWithoutToChapterInput
    coAuthors?: NexusGenInputs['UserCreateManyWithoutChaptersInput'] | null; // UserCreateManyWithoutChaptersInput
    content: any; // Json!
    createdAt?: any | null; // DateTime
    id?: string | null; // String
    published?: boolean | null; // Boolean
    tags?: NexusGenInputs['TagCreateManyWithoutChaptersInput'] | null; // TagCreateManyWithoutChaptersInput
    title: string; // String!
    updatedAt?: any | null; // DateTime
  }
  ChapterCreateWithoutBookInput: { // input type
    author?: NexusGenInputs['UserCreateOneWithoutChapterInput'] | null; // UserCreateOneWithoutChapterInput
    chapterLinksFrom?: NexusGenInputs['ChapterLinkCreateManyWithoutFromChapterInput'] | null; // ChapterLinkCreateManyWithoutFromChapterInput
    chapterLinksTo?: NexusGenInputs['ChapterLinkCreateManyWithoutToChapterInput'] | null; // ChapterLinkCreateManyWithoutToChapterInput
    coAuthors?: NexusGenInputs['UserCreateManyWithoutChaptersInput'] | null; // UserCreateManyWithoutChaptersInput
    content: any; // Json!
    createdAt?: any | null; // DateTime
    id?: string | null; // String
    published?: boolean | null; // Boolean
    tags?: NexusGenInputs['TagCreateManyWithoutChaptersInput'] | null; // TagCreateManyWithoutChaptersInput
    title: string; // String!
    updatedAt?: any | null; // DateTime
  }
  ChapterCreateWithoutChapterLinksFromInput: { // input type
    author?: NexusGenInputs['UserCreateOneWithoutChapterInput'] | null; // UserCreateOneWithoutChapterInput
    book?: NexusGenInputs['BookCreateOneWithoutChaptersInput'] | null; // BookCreateOneWithoutChaptersInput
    chapterLinksTo?: NexusGenInputs['ChapterLinkCreateManyWithoutToChapterInput'] | null; // ChapterLinkCreateManyWithoutToChapterInput
    coAuthors?: NexusGenInputs['UserCreateManyWithoutChaptersInput'] | null; // UserCreateManyWithoutChaptersInput
    content: any; // Json!
    createdAt?: any | null; // DateTime
    id?: string | null; // String
    published?: boolean | null; // Boolean
    tags?: NexusGenInputs['TagCreateManyWithoutChaptersInput'] | null; // TagCreateManyWithoutChaptersInput
    title: string; // String!
    updatedAt?: any | null; // DateTime
  }
  ChapterCreateWithoutChapterLinksToInput: { // input type
    author?: NexusGenInputs['UserCreateOneWithoutChapterInput'] | null; // UserCreateOneWithoutChapterInput
    book?: NexusGenInputs['BookCreateOneWithoutChaptersInput'] | null; // BookCreateOneWithoutChaptersInput
    chapterLinksFrom?: NexusGenInputs['ChapterLinkCreateManyWithoutFromChapterInput'] | null; // ChapterLinkCreateManyWithoutFromChapterInput
    coAuthors?: NexusGenInputs['UserCreateManyWithoutChaptersInput'] | null; // UserCreateManyWithoutChaptersInput
    content: any; // Json!
    createdAt?: any | null; // DateTime
    id?: string | null; // String
    published?: boolean | null; // Boolean
    tags?: NexusGenInputs['TagCreateManyWithoutChaptersInput'] | null; // TagCreateManyWithoutChaptersInput
    title: string; // String!
    updatedAt?: any | null; // DateTime
  }
  ChapterCreateWithoutCoAuthorsInput: { // input type
    author?: NexusGenInputs['UserCreateOneWithoutChapterInput'] | null; // UserCreateOneWithoutChapterInput
    book?: NexusGenInputs['BookCreateOneWithoutChaptersInput'] | null; // BookCreateOneWithoutChaptersInput
    chapterLinksFrom?: NexusGenInputs['ChapterLinkCreateManyWithoutFromChapterInput'] | null; // ChapterLinkCreateManyWithoutFromChapterInput
    chapterLinksTo?: NexusGenInputs['ChapterLinkCreateManyWithoutToChapterInput'] | null; // ChapterLinkCreateManyWithoutToChapterInput
    content: any; // Json!
    createdAt?: any | null; // DateTime
    id?: string | null; // String
    published?: boolean | null; // Boolean
    tags?: NexusGenInputs['TagCreateManyWithoutChaptersInput'] | null; // TagCreateManyWithoutChaptersInput
    title: string; // String!
    updatedAt?: any | null; // DateTime
  }
  ChapterCreateWithoutTagsInput: { // input type
    author?: NexusGenInputs['UserCreateOneWithoutChapterInput'] | null; // UserCreateOneWithoutChapterInput
    book?: NexusGenInputs['BookCreateOneWithoutChaptersInput'] | null; // BookCreateOneWithoutChaptersInput
    chapterLinksFrom?: NexusGenInputs['ChapterLinkCreateManyWithoutFromChapterInput'] | null; // ChapterLinkCreateManyWithoutFromChapterInput
    chapterLinksTo?: NexusGenInputs['ChapterLinkCreateManyWithoutToChapterInput'] | null; // ChapterLinkCreateManyWithoutToChapterInput
    coAuthors?: NexusGenInputs['UserCreateManyWithoutChaptersInput'] | null; // UserCreateManyWithoutChaptersInput
    content: any; // Json!
    createdAt?: any | null; // DateTime
    id?: string | null; // String
    published?: boolean | null; // Boolean
    title: string; // String!
    updatedAt?: any | null; // DateTime
  }
  ChapterLinkCreateManyWithoutFromChapterInput: { // input type
    connect?: NexusGenInputs['ChapterLinkWhereUniqueInput'][] | null; // [ChapterLinkWhereUniqueInput!]
    create?: NexusGenInputs['ChapterLinkCreateWithoutFromChapterInput'][] | null; // [ChapterLinkCreateWithoutFromChapterInput!]
  }
  ChapterLinkCreateManyWithoutToChapterInput: { // input type
    connect?: NexusGenInputs['ChapterLinkWhereUniqueInput'][] | null; // [ChapterLinkWhereUniqueInput!]
    create?: NexusGenInputs['ChapterLinkCreateWithoutToChapterInput'][] | null; // [ChapterLinkCreateWithoutToChapterInput!]
  }
  ChapterLinkCreateWithoutFromChapterInput: { // input type
    createdAt?: any | null; // DateTime
    id?: string | null; // String
    title: string; // String!
    toChapter?: NexusGenInputs['ChapterCreateOneWithoutChapterLinksToInput'] | null; // ChapterCreateOneWithoutChapterLinksToInput
    updatedAt?: any | null; // DateTime
  }
  ChapterLinkCreateWithoutToChapterInput: { // input type
    createdAt?: any | null; // DateTime
    fromChapter?: NexusGenInputs['ChapterCreateOneWithoutChapterLinksFromInput'] | null; // ChapterCreateOneWithoutChapterLinksFromInput
    id?: string | null; // String
    title: string; // String!
    updatedAt?: any | null; // DateTime
  }
  ChapterLinkWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  ChapterWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  TagCreateManyWithoutBooksInput: { // input type
    connect?: NexusGenInputs['TagWhereUniqueInput'][] | null; // [TagWhereUniqueInput!]
    create?: NexusGenInputs['TagCreateWithoutBooksInput'][] | null; // [TagCreateWithoutBooksInput!]
  }
  TagCreateManyWithoutChaptersInput: { // input type
    connect?: NexusGenInputs['TagWhereUniqueInput'][] | null; // [TagWhereUniqueInput!]
    create?: NexusGenInputs['TagCreateWithoutChaptersInput'][] | null; // [TagCreateWithoutChaptersInput!]
  }
  TagCreateWithoutBooksInput: { // input type
    chapters?: NexusGenInputs['ChapterCreateManyWithoutTagsInput'] | null; // ChapterCreateManyWithoutTagsInput
    createdAt?: any | null; // DateTime
    id?: string | null; // String
    title: string; // String!
  }
  TagCreateWithoutChaptersInput: { // input type
    books?: NexusGenInputs['BookCreateManyWithoutTagsInput'] | null; // BookCreateManyWithoutTagsInput
    createdAt?: any | null; // DateTime
    id?: string | null; // String
    title: string; // String!
  }
  TagWhereUniqueInput: { // input type
    id?: string | null; // String
    title?: string | null; // String
  }
  UserCreateManyWithoutBookInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'][] | null; // [UserWhereUniqueInput!]
    create?: NexusGenInputs['UserCreateWithoutBookInput'][] | null; // [UserCreateWithoutBookInput!]
  }
  UserCreateManyWithoutChaptersInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'][] | null; // [UserWhereUniqueInput!]
    create?: NexusGenInputs['UserCreateWithoutChaptersInput'][] | null; // [UserCreateWithoutChaptersInput!]
  }
  UserCreateOneWithoutBooksInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    create?: NexusGenInputs['UserCreateWithoutBooksInput'] | null; // UserCreateWithoutBooksInput
  }
  UserCreateOneWithoutChapterInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    create?: NexusGenInputs['UserCreateWithoutChapterInput'] | null; // UserCreateWithoutChapterInput
  }
  UserCreateWithoutBookInput: { // input type
    books?: NexusGenInputs['BookCreateManyWithoutAuthorInput'] | null; // BookCreateManyWithoutAuthorInput
    Chapter?: NexusGenInputs['ChapterCreateManyWithoutAuthorInput'] | null; // ChapterCreateManyWithoutAuthorInput
    chapters?: NexusGenInputs['ChapterCreateManyWithoutCoAuthorsInput'] | null; // ChapterCreateManyWithoutCoAuthorsInput
    createdAt?: any | null; // DateTime
    email: string; // String!
    emailHash: string; // String!
    id?: string | null; // String
    name?: string | null; // String
    password?: string | null; // String
    passwordSalt?: string | null; // String
    role?: NexusGenEnums['Role'] | null; // Role
    updatedAt?: any | null; // DateTime
  }
  UserCreateWithoutBooksInput: { // input type
    Book?: NexusGenInputs['BookCreateOneWithoutCoAuthorsInput'] | null; // BookCreateOneWithoutCoAuthorsInput
    Chapter?: NexusGenInputs['ChapterCreateManyWithoutAuthorInput'] | null; // ChapterCreateManyWithoutAuthorInput
    chapters?: NexusGenInputs['ChapterCreateManyWithoutCoAuthorsInput'] | null; // ChapterCreateManyWithoutCoAuthorsInput
    createdAt?: any | null; // DateTime
    email: string; // String!
    emailHash: string; // String!
    id?: string | null; // String
    name?: string | null; // String
    password?: string | null; // String
    passwordSalt?: string | null; // String
    role?: NexusGenEnums['Role'] | null; // Role
    updatedAt?: any | null; // DateTime
  }
  UserCreateWithoutChapterInput: { // input type
    Book?: NexusGenInputs['BookCreateOneWithoutCoAuthorsInput'] | null; // BookCreateOneWithoutCoAuthorsInput
    books?: NexusGenInputs['BookCreateManyWithoutAuthorInput'] | null; // BookCreateManyWithoutAuthorInput
    chapters?: NexusGenInputs['ChapterCreateManyWithoutCoAuthorsInput'] | null; // ChapterCreateManyWithoutCoAuthorsInput
    createdAt?: any | null; // DateTime
    email: string; // String!
    emailHash: string; // String!
    id?: string | null; // String
    name?: string | null; // String
    password?: string | null; // String
    passwordSalt?: string | null; // String
    role?: NexusGenEnums['Role'] | null; // Role
    updatedAt?: any | null; // DateTime
  }
  UserCreateWithoutChaptersInput: { // input type
    Book?: NexusGenInputs['BookCreateOneWithoutCoAuthorsInput'] | null; // BookCreateOneWithoutCoAuthorsInput
    books?: NexusGenInputs['BookCreateManyWithoutAuthorInput'] | null; // BookCreateManyWithoutAuthorInput
    Chapter?: NexusGenInputs['ChapterCreateManyWithoutAuthorInput'] | null; // ChapterCreateManyWithoutAuthorInput
    createdAt?: any | null; // DateTime
    email: string; // String!
    emailHash: string; // String!
    id?: string | null; // String
    name?: string | null; // String
    password?: string | null; // String
    passwordSalt?: string | null; // String
    role?: NexusGenEnums['Role'] | null; // Role
    updatedAt?: any | null; // DateTime
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: string | null; // String
  }
}

export interface NexusGenEnums {
  Role: "ADMIN" | "USER"
}

export interface NexusGenRootTypes {
  Book: { // root type
    createdAt: any; // DateTime!
    id: string; // String!
    published: boolean; // Boolean!
    title: string; // String!
    updatedAt: any; // DateTime!
  }
  Chapter: { // root type
    createdAt: any; // DateTime!
    id: string; // String!
    published: boolean; // Boolean!
    title: string; // String!
    updatedAt: any; // DateTime!
  }
  ChapterLink: { // root type
    createdAt: any; // DateTime!
    id: string; // String!
    title: string; // String!
    updatedAt: any; // DateTime!
  }
  Mutation: {};
  Query: {};
  SignOut: { // root type
    success: boolean; // Boolean!
  }
  Tag: { // root type
    createdAt: any; // DateTime!
    id: string; // String!
    title: string; // String!
  }
  User: { // root type
    createdAt: any; // DateTime!
    email: string; // String!
    emailHash: string; // String!
    id: string; // String!
    name?: string | null; // String
    role: NexusGenEnums['Role']; // Role!
    updatedAt: any; // DateTime!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  Date: any;
  DateTime: any;
  Json: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  BookCreateInput: NexusGenInputs['BookCreateInput'];
  BookCreateManyWithoutAuthorInput: NexusGenInputs['BookCreateManyWithoutAuthorInput'];
  BookCreateManyWithoutTagsInput: NexusGenInputs['BookCreateManyWithoutTagsInput'];
  BookCreateOneWithoutChaptersInput: NexusGenInputs['BookCreateOneWithoutChaptersInput'];
  BookCreateOneWithoutCoAuthorsInput: NexusGenInputs['BookCreateOneWithoutCoAuthorsInput'];
  BookCreateWithoutAuthorInput: NexusGenInputs['BookCreateWithoutAuthorInput'];
  BookCreateWithoutChaptersInput: NexusGenInputs['BookCreateWithoutChaptersInput'];
  BookCreateWithoutCoAuthorsInput: NexusGenInputs['BookCreateWithoutCoAuthorsInput'];
  BookCreateWithoutTagsInput: NexusGenInputs['BookCreateWithoutTagsInput'];
  BookWhereUniqueInput: NexusGenInputs['BookWhereUniqueInput'];
  ChapterCreateManyWithoutAuthorInput: NexusGenInputs['ChapterCreateManyWithoutAuthorInput'];
  ChapterCreateManyWithoutBookInput: NexusGenInputs['ChapterCreateManyWithoutBookInput'];
  ChapterCreateManyWithoutCoAuthorsInput: NexusGenInputs['ChapterCreateManyWithoutCoAuthorsInput'];
  ChapterCreateManyWithoutTagsInput: NexusGenInputs['ChapterCreateManyWithoutTagsInput'];
  ChapterCreateOneWithoutChapterLinksFromInput: NexusGenInputs['ChapterCreateOneWithoutChapterLinksFromInput'];
  ChapterCreateOneWithoutChapterLinksToInput: NexusGenInputs['ChapterCreateOneWithoutChapterLinksToInput'];
  ChapterCreateWithoutAuthorInput: NexusGenInputs['ChapterCreateWithoutAuthorInput'];
  ChapterCreateWithoutBookInput: NexusGenInputs['ChapterCreateWithoutBookInput'];
  ChapterCreateWithoutChapterLinksFromInput: NexusGenInputs['ChapterCreateWithoutChapterLinksFromInput'];
  ChapterCreateWithoutChapterLinksToInput: NexusGenInputs['ChapterCreateWithoutChapterLinksToInput'];
  ChapterCreateWithoutCoAuthorsInput: NexusGenInputs['ChapterCreateWithoutCoAuthorsInput'];
  ChapterCreateWithoutTagsInput: NexusGenInputs['ChapterCreateWithoutTagsInput'];
  ChapterLinkCreateManyWithoutFromChapterInput: NexusGenInputs['ChapterLinkCreateManyWithoutFromChapterInput'];
  ChapterLinkCreateManyWithoutToChapterInput: NexusGenInputs['ChapterLinkCreateManyWithoutToChapterInput'];
  ChapterLinkCreateWithoutFromChapterInput: NexusGenInputs['ChapterLinkCreateWithoutFromChapterInput'];
  ChapterLinkCreateWithoutToChapterInput: NexusGenInputs['ChapterLinkCreateWithoutToChapterInput'];
  ChapterLinkWhereUniqueInput: NexusGenInputs['ChapterLinkWhereUniqueInput'];
  ChapterWhereUniqueInput: NexusGenInputs['ChapterWhereUniqueInput'];
  TagCreateManyWithoutBooksInput: NexusGenInputs['TagCreateManyWithoutBooksInput'];
  TagCreateManyWithoutChaptersInput: NexusGenInputs['TagCreateManyWithoutChaptersInput'];
  TagCreateWithoutBooksInput: NexusGenInputs['TagCreateWithoutBooksInput'];
  TagCreateWithoutChaptersInput: NexusGenInputs['TagCreateWithoutChaptersInput'];
  TagWhereUniqueInput: NexusGenInputs['TagWhereUniqueInput'];
  UserCreateManyWithoutBookInput: NexusGenInputs['UserCreateManyWithoutBookInput'];
  UserCreateManyWithoutChaptersInput: NexusGenInputs['UserCreateManyWithoutChaptersInput'];
  UserCreateOneWithoutBooksInput: NexusGenInputs['UserCreateOneWithoutBooksInput'];
  UserCreateOneWithoutChapterInput: NexusGenInputs['UserCreateOneWithoutChapterInput'];
  UserCreateWithoutBookInput: NexusGenInputs['UserCreateWithoutBookInput'];
  UserCreateWithoutBooksInput: NexusGenInputs['UserCreateWithoutBooksInput'];
  UserCreateWithoutChapterInput: NexusGenInputs['UserCreateWithoutChapterInput'];
  UserCreateWithoutChaptersInput: NexusGenInputs['UserCreateWithoutChaptersInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
  Role: NexusGenEnums['Role'];
}

export interface NexusGenFieldTypes {
  Book: { // field return type
    author: NexusGenRootTypes['User'] | null; // User
    chapters: NexusGenRootTypes['Chapter'][]; // [Chapter!]!
    coAuthors: NexusGenRootTypes['User'][]; // [User!]!
    createdAt: any; // DateTime!
    id: string; // String!
    published: boolean; // Boolean!
    tags: NexusGenRootTypes['Tag'][]; // [Tag!]!
    title: string; // String!
    updatedAt: any; // DateTime!
  }
  Chapter: { // field return type
    author: NexusGenRootTypes['User'] | null; // User
    book: NexusGenRootTypes['Book'] | null; // Book
    chapterLinksFrom: NexusGenRootTypes['ChapterLink'][]; // [ChapterLink!]!
    chapterLinksTo: NexusGenRootTypes['ChapterLink'][]; // [ChapterLink!]!
    coAuthors: NexusGenRootTypes['User'][]; // [User!]!
    createdAt: any; // DateTime!
    id: string; // String!
    published: boolean; // Boolean!
    tags: NexusGenRootTypes['Tag'][]; // [Tag!]!
    title: string; // String!
    updatedAt: any; // DateTime!
  }
  ChapterLink: { // field return type
    createdAt: any; // DateTime!
    fromChapter: NexusGenRootTypes['Chapter'] | null; // Chapter
    id: string; // String!
    title: string; // String!
    toChapter: NexusGenRootTypes['Chapter'] | null; // Chapter
    updatedAt: any; // DateTime!
  }
  Mutation: { // field return type
    createOneBook: NexusGenRootTypes['Book']; // Book!
    signIn: NexusGenRootTypes['User']; // User!
    signOut: NexusGenRootTypes['SignOut']; // SignOut!
    signUp: NexusGenRootTypes['User']; // User!
  }
  Query: { // field return type
    me: NexusGenRootTypes['User'] | null; // User
    user: NexusGenRootTypes['User'] | null; // User
  }
  SignOut: { // field return type
    success: boolean; // Boolean!
  }
  Tag: { // field return type
    books: NexusGenRootTypes['Book'][]; // [Book!]!
    chapters: NexusGenRootTypes['Chapter'][]; // [Chapter!]!
    createdAt: any; // DateTime!
    id: string; // String!
    title: string; // String!
  }
  User: { // field return type
    books: NexusGenRootTypes['Book'][]; // [Book!]!
    chapters: NexusGenRootTypes['Chapter'][]; // [Chapter!]!
    createdAt: any; // DateTime!
    email: string; // String!
    emailHash: string; // String!
    id: string; // String!
    name: string | null; // String
    role: NexusGenEnums['Role']; // Role!
    updatedAt: any; // DateTime!
  }
}

export interface NexusGenArgTypes {
  Book: {
    chapters: { // args
      skip?: number | null; // Int
    }
    coAuthors: { // args
      skip?: number | null; // Int
    }
    tags: { // args
      skip?: number | null; // Int
    }
  }
  Chapter: {
    chapterLinksFrom: { // args
      skip?: number | null; // Int
    }
    chapterLinksTo: { // args
      skip?: number | null; // Int
    }
    coAuthors: { // args
      skip?: number | null; // Int
    }
    tags: { // args
      skip?: number | null; // Int
    }
  }
  Mutation: {
    createOneBook: { // args
      data: NexusGenInputs['BookCreateInput']; // BookCreateInput!
    }
    signIn: { // args
      email: string; // String!
      password: string; // String!
    }
    signUp: { // args
      email: string; // String!
      name?: string | null; // String
      password: string; // String!
    }
  }
  Query: {
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
  }
  Tag: {
    books: { // args
      skip?: number | null; // Int
    }
    chapters: { // args
      skip?: number | null; // Int
    }
  }
  User: {
    books: { // args
      skip?: number | null; // Int
    }
    chapters: { // args
      skip?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Book" | "Chapter" | "ChapterLink" | "Mutation" | "Query" | "SignOut" | "Tag" | "User";

export type NexusGenInputNames = "BookCreateInput" | "BookCreateManyWithoutAuthorInput" | "BookCreateManyWithoutTagsInput" | "BookCreateOneWithoutChaptersInput" | "BookCreateOneWithoutCoAuthorsInput" | "BookCreateWithoutAuthorInput" | "BookCreateWithoutChaptersInput" | "BookCreateWithoutCoAuthorsInput" | "BookCreateWithoutTagsInput" | "BookWhereUniqueInput" | "ChapterCreateManyWithoutAuthorInput" | "ChapterCreateManyWithoutBookInput" | "ChapterCreateManyWithoutCoAuthorsInput" | "ChapterCreateManyWithoutTagsInput" | "ChapterCreateOneWithoutChapterLinksFromInput" | "ChapterCreateOneWithoutChapterLinksToInput" | "ChapterCreateWithoutAuthorInput" | "ChapterCreateWithoutBookInput" | "ChapterCreateWithoutChapterLinksFromInput" | "ChapterCreateWithoutChapterLinksToInput" | "ChapterCreateWithoutCoAuthorsInput" | "ChapterCreateWithoutTagsInput" | "ChapterLinkCreateManyWithoutFromChapterInput" | "ChapterLinkCreateManyWithoutToChapterInput" | "ChapterLinkCreateWithoutFromChapterInput" | "ChapterLinkCreateWithoutToChapterInput" | "ChapterLinkWhereUniqueInput" | "ChapterWhereUniqueInput" | "TagCreateManyWithoutBooksInput" | "TagCreateManyWithoutChaptersInput" | "TagCreateWithoutBooksInput" | "TagCreateWithoutChaptersInput" | "TagWhereUniqueInput" | "UserCreateManyWithoutBookInput" | "UserCreateManyWithoutChaptersInput" | "UserCreateOneWithoutBooksInput" | "UserCreateOneWithoutChapterInput" | "UserCreateWithoutBookInput" | "UserCreateWithoutBooksInput" | "UserCreateWithoutChapterInput" | "UserCreateWithoutChaptersInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = "Role";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Date" | "DateTime" | "Float" | "ID" | "Int" | "Json" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}