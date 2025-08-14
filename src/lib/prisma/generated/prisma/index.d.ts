
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Party
 * 
 */
export type Party = $Result.DefaultSelection<Prisma.$PartyPayload>
/**
 * Model PartyMember
 * 
 */
export type PartyMember = $Result.DefaultSelection<Prisma.$PartyMemberPayload>
/**
 * Model QueueItem
 * 
 */
export type QueueItem = $Result.DefaultSelection<Prisma.$QueueItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PlaybackStatus: {
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED'
};

export type PlaybackStatus = (typeof PlaybackStatus)[keyof typeof PlaybackStatus]


export const AutoplayType: {
  REPEAT: 'REPEAT',
  SHUFFLE: 'SHUFFLE',
  DISABLED: 'DISABLED'
};

export type AutoplayType = (typeof AutoplayType)[keyof typeof AutoplayType]


export const ItemStatus: {
  PREVIOUS: 'PREVIOUS',
  CURRENT: 'CURRENT',
  NEXT: 'NEXT'
};

export type ItemStatus = (typeof ItemStatus)[keyof typeof ItemStatus]

}

export type PlaybackStatus = $Enums.PlaybackStatus

export const PlaybackStatus: typeof $Enums.PlaybackStatus

export type AutoplayType = $Enums.AutoplayType

export const AutoplayType: typeof $Enums.AutoplayType

export type ItemStatus = $Enums.ItemStatus

export const ItemStatus: typeof $Enums.ItemStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profile.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.party`: Exposes CRUD operations for the **Party** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parties
    * const parties = await prisma.party.findMany()
    * ```
    */
  get party(): Prisma.PartyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partyMember`: Exposes CRUD operations for the **PartyMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PartyMembers
    * const partyMembers = await prisma.partyMember.findMany()
    * ```
    */
  get partyMember(): Prisma.PartyMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.queueItem`: Exposes CRUD operations for the **QueueItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QueueItems
    * const queueItems = await prisma.queueItem.findMany()
    * ```
    */
  get queueItem(): Prisma.QueueItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Profile: 'Profile',
    Party: 'Party',
    PartyMember: 'PartyMember',
    QueueItem: 'QueueItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "profile" | "party" | "partyMember" | "queueItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Party: {
        payload: Prisma.$PartyPayload<ExtArgs>
        fields: Prisma.PartyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload>
          }
          findFirst: {
            args: Prisma.PartyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload>
          }
          findMany: {
            args: Prisma.PartyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload>[]
          }
          create: {
            args: Prisma.PartyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload>
          }
          createMany: {
            args: Prisma.PartyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload>[]
          }
          delete: {
            args: Prisma.PartyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload>
          }
          update: {
            args: Prisma.PartyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload>
          }
          deleteMany: {
            args: Prisma.PartyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload>[]
          }
          upsert: {
            args: Prisma.PartyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload>
          }
          aggregate: {
            args: Prisma.PartyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParty>
          }
          groupBy: {
            args: Prisma.PartyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartyCountArgs<ExtArgs>
            result: $Utils.Optional<PartyCountAggregateOutputType> | number
          }
        }
      }
      PartyMember: {
        payload: Prisma.$PartyMemberPayload<ExtArgs>
        fields: Prisma.PartyMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartyMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartyMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyMemberPayload>
          }
          findFirst: {
            args: Prisma.PartyMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartyMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyMemberPayload>
          }
          findMany: {
            args: Prisma.PartyMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyMemberPayload>[]
          }
          create: {
            args: Prisma.PartyMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyMemberPayload>
          }
          createMany: {
            args: Prisma.PartyMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartyMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyMemberPayload>[]
          }
          delete: {
            args: Prisma.PartyMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyMemberPayload>
          }
          update: {
            args: Prisma.PartyMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyMemberPayload>
          }
          deleteMany: {
            args: Prisma.PartyMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartyMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartyMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyMemberPayload>[]
          }
          upsert: {
            args: Prisma.PartyMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyMemberPayload>
          }
          aggregate: {
            args: Prisma.PartyMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartyMember>
          }
          groupBy: {
            args: Prisma.PartyMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartyMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartyMemberCountArgs<ExtArgs>
            result: $Utils.Optional<PartyMemberCountAggregateOutputType> | number
          }
        }
      }
      QueueItem: {
        payload: Prisma.$QueueItemPayload<ExtArgs>
        fields: Prisma.QueueItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QueueItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QueueItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueItemPayload>
          }
          findFirst: {
            args: Prisma.QueueItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QueueItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueItemPayload>
          }
          findMany: {
            args: Prisma.QueueItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueItemPayload>[]
          }
          create: {
            args: Prisma.QueueItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueItemPayload>
          }
          createMany: {
            args: Prisma.QueueItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QueueItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueItemPayload>[]
          }
          delete: {
            args: Prisma.QueueItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueItemPayload>
          }
          update: {
            args: Prisma.QueueItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueItemPayload>
          }
          deleteMany: {
            args: Prisma.QueueItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QueueItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QueueItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueItemPayload>[]
          }
          upsert: {
            args: Prisma.QueueItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueItemPayload>
          }
          aggregate: {
            args: Prisma.QueueItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQueueItem>
          }
          groupBy: {
            args: Prisma.QueueItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<QueueItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.QueueItemCountArgs<ExtArgs>
            result: $Utils.Optional<QueueItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    profile?: ProfileOmit
    party?: PartyOmit
    partyMember?: PartyMemberOmit
    queueItem?: QueueItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PartyCountOutputType
   */

  export type PartyCountOutputType = {
    members: number
    queue: number
  }

  export type PartyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | PartyCountOutputTypeCountMembersArgs
    queue?: boolean | PartyCountOutputTypeCountQueueArgs
  }

  // Custom InputTypes
  /**
   * PartyCountOutputType without action
   */
  export type PartyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyCountOutputType
     */
    select?: PartyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PartyCountOutputType without action
   */
  export type PartyCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartyMemberWhereInput
  }

  /**
   * PartyCountOutputType without action
   */
  export type PartyCountOutputTypeCountQueueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueueItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    conntectedSpotify: boolean | null
    nextConnectSpotify: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    conntectedSpotify: boolean | null
    nextConnectSpotify: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    name: number
    email: number
    conntectedSpotify: number
    nextConnectSpotify: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    conntectedSpotify?: true
    nextConnectSpotify?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    conntectedSpotify?: true
    nextConnectSpotify?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    conntectedSpotify?: true
    nextConnectSpotify?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    name: string | null
    email: string
    conntectedSpotify: boolean
    nextConnectSpotify: Date
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    conntectedSpotify?: boolean
    nextConnectSpotify?: boolean
    partyMemberships?: boolean | Profile$partyMembershipsArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    conntectedSpotify?: boolean
    nextConnectSpotify?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    conntectedSpotify?: boolean
    nextConnectSpotify?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    conntectedSpotify?: boolean
    nextConnectSpotify?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "conntectedSpotify" | "nextConnectSpotify", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partyMemberships?: boolean | Profile$partyMembershipsArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      partyMemberships: Prisma.$PartyMemberPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      conntectedSpotify: boolean
      nextConnectSpotify: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    partyMemberships<T extends Profile$partyMembershipsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$partyMembershipsArgs<ExtArgs>>): Prisma__PartyMemberClient<$Result.GetResult<Prisma.$PartyMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly name: FieldRef<"Profile", 'String'>
    readonly email: FieldRef<"Profile", 'String'>
    readonly conntectedSpotify: FieldRef<"Profile", 'Boolean'>
    readonly nextConnectSpotify: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.partyMemberships
   */
  export type Profile$partyMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyMember
     */
    omit?: PartyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyMemberInclude<ExtArgs> | null
    where?: PartyMemberWhereInput
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Party
   */

  export type AggregateParty = {
    _count: PartyCountAggregateOutputType | null
    _avg: PartyAvgAggregateOutputType | null
    _sum: PartySumAggregateOutputType | null
    _min: PartyMinAggregateOutputType | null
    _max: PartyMaxAggregateOutputType | null
  }

  export type PartyAvgAggregateOutputType = {
    positionMS: number | null
  }

  export type PartySumAggregateOutputType = {
    positionMS: number | null
  }

  export type PartyMinAggregateOutputType = {
    id: string | null
    name: string | null
    positionMS: number | null
    startedAt: Date | null
    status: $Enums.PlaybackStatus | null
    autoplay: $Enums.AutoplayType | null
    headId: string | null
    tailId: string | null
    currentId: string | null
  }

  export type PartyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    positionMS: number | null
    startedAt: Date | null
    status: $Enums.PlaybackStatus | null
    autoplay: $Enums.AutoplayType | null
    headId: string | null
    tailId: string | null
    currentId: string | null
  }

  export type PartyCountAggregateOutputType = {
    id: number
    name: number
    positionMS: number
    startedAt: number
    status: number
    autoplay: number
    headId: number
    tailId: number
    currentId: number
    _all: number
  }


  export type PartyAvgAggregateInputType = {
    positionMS?: true
  }

  export type PartySumAggregateInputType = {
    positionMS?: true
  }

  export type PartyMinAggregateInputType = {
    id?: true
    name?: true
    positionMS?: true
    startedAt?: true
    status?: true
    autoplay?: true
    headId?: true
    tailId?: true
    currentId?: true
  }

  export type PartyMaxAggregateInputType = {
    id?: true
    name?: true
    positionMS?: true
    startedAt?: true
    status?: true
    autoplay?: true
    headId?: true
    tailId?: true
    currentId?: true
  }

  export type PartyCountAggregateInputType = {
    id?: true
    name?: true
    positionMS?: true
    startedAt?: true
    status?: true
    autoplay?: true
    headId?: true
    tailId?: true
    currentId?: true
    _all?: true
  }

  export type PartyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Party to aggregate.
     */
    where?: PartyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parties to fetch.
     */
    orderBy?: PartyOrderByWithRelationInput | PartyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parties
    **/
    _count?: true | PartyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartyMaxAggregateInputType
  }

  export type GetPartyAggregateType<T extends PartyAggregateArgs> = {
        [P in keyof T & keyof AggregateParty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParty[P]>
      : GetScalarType<T[P], AggregateParty[P]>
  }




  export type PartyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartyWhereInput
    orderBy?: PartyOrderByWithAggregationInput | PartyOrderByWithAggregationInput[]
    by: PartyScalarFieldEnum[] | PartyScalarFieldEnum
    having?: PartyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartyCountAggregateInputType | true
    _avg?: PartyAvgAggregateInputType
    _sum?: PartySumAggregateInputType
    _min?: PartyMinAggregateInputType
    _max?: PartyMaxAggregateInputType
  }

  export type PartyGroupByOutputType = {
    id: string
    name: string
    positionMS: number
    startedAt: Date | null
    status: $Enums.PlaybackStatus
    autoplay: $Enums.AutoplayType
    headId: string | null
    tailId: string | null
    currentId: string | null
    _count: PartyCountAggregateOutputType | null
    _avg: PartyAvgAggregateOutputType | null
    _sum: PartySumAggregateOutputType | null
    _min: PartyMinAggregateOutputType | null
    _max: PartyMaxAggregateOutputType | null
  }

  type GetPartyGroupByPayload<T extends PartyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartyGroupByOutputType[P]>
            : GetScalarType<T[P], PartyGroupByOutputType[P]>
        }
      >
    >


  export type PartySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    positionMS?: boolean
    startedAt?: boolean
    status?: boolean
    autoplay?: boolean
    headId?: boolean
    tailId?: boolean
    currentId?: boolean
    queueCurrent?: boolean | Party$queueCurrentArgs<ExtArgs>
    queueHead?: boolean | Party$queueHeadArgs<ExtArgs>
    queueTail?: boolean | Party$queueTailArgs<ExtArgs>
    members?: boolean | Party$membersArgs<ExtArgs>
    queue?: boolean | Party$queueArgs<ExtArgs>
    _count?: boolean | PartyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["party"]>

  export type PartySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    positionMS?: boolean
    startedAt?: boolean
    status?: boolean
    autoplay?: boolean
    headId?: boolean
    tailId?: boolean
    currentId?: boolean
    queueCurrent?: boolean | Party$queueCurrentArgs<ExtArgs>
    queueHead?: boolean | Party$queueHeadArgs<ExtArgs>
    queueTail?: boolean | Party$queueTailArgs<ExtArgs>
  }, ExtArgs["result"]["party"]>

  export type PartySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    positionMS?: boolean
    startedAt?: boolean
    status?: boolean
    autoplay?: boolean
    headId?: boolean
    tailId?: boolean
    currentId?: boolean
    queueCurrent?: boolean | Party$queueCurrentArgs<ExtArgs>
    queueHead?: boolean | Party$queueHeadArgs<ExtArgs>
    queueTail?: boolean | Party$queueTailArgs<ExtArgs>
  }, ExtArgs["result"]["party"]>

  export type PartySelectScalar = {
    id?: boolean
    name?: boolean
    positionMS?: boolean
    startedAt?: boolean
    status?: boolean
    autoplay?: boolean
    headId?: boolean
    tailId?: boolean
    currentId?: boolean
  }

  export type PartyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "positionMS" | "startedAt" | "status" | "autoplay" | "headId" | "tailId" | "currentId", ExtArgs["result"]["party"]>
  export type PartyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    queueCurrent?: boolean | Party$queueCurrentArgs<ExtArgs>
    queueHead?: boolean | Party$queueHeadArgs<ExtArgs>
    queueTail?: boolean | Party$queueTailArgs<ExtArgs>
    members?: boolean | Party$membersArgs<ExtArgs>
    queue?: boolean | Party$queueArgs<ExtArgs>
    _count?: boolean | PartyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PartyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    queueCurrent?: boolean | Party$queueCurrentArgs<ExtArgs>
    queueHead?: boolean | Party$queueHeadArgs<ExtArgs>
    queueTail?: boolean | Party$queueTailArgs<ExtArgs>
  }
  export type PartyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    queueCurrent?: boolean | Party$queueCurrentArgs<ExtArgs>
    queueHead?: boolean | Party$queueHeadArgs<ExtArgs>
    queueTail?: boolean | Party$queueTailArgs<ExtArgs>
  }

  export type $PartyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Party"
    objects: {
      queueCurrent: Prisma.$QueueItemPayload<ExtArgs> | null
      queueHead: Prisma.$QueueItemPayload<ExtArgs> | null
      queueTail: Prisma.$QueueItemPayload<ExtArgs> | null
      members: Prisma.$PartyMemberPayload<ExtArgs>[]
      queue: Prisma.$QueueItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      positionMS: number
      startedAt: Date | null
      status: $Enums.PlaybackStatus
      autoplay: $Enums.AutoplayType
      headId: string | null
      tailId: string | null
      currentId: string | null
    }, ExtArgs["result"]["party"]>
    composites: {}
  }

  type PartyGetPayload<S extends boolean | null | undefined | PartyDefaultArgs> = $Result.GetResult<Prisma.$PartyPayload, S>

  type PartyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartyCountAggregateInputType | true
    }

  export interface PartyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Party'], meta: { name: 'Party' } }
    /**
     * Find zero or one Party that matches the filter.
     * @param {PartyFindUniqueArgs} args - Arguments to find a Party
     * @example
     * // Get one Party
     * const party = await prisma.party.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartyFindUniqueArgs>(args: SelectSubset<T, PartyFindUniqueArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Party that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartyFindUniqueOrThrowArgs} args - Arguments to find a Party
     * @example
     * // Get one Party
     * const party = await prisma.party.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartyFindUniqueOrThrowArgs>(args: SelectSubset<T, PartyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Party that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyFindFirstArgs} args - Arguments to find a Party
     * @example
     * // Get one Party
     * const party = await prisma.party.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartyFindFirstArgs>(args?: SelectSubset<T, PartyFindFirstArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Party that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyFindFirstOrThrowArgs} args - Arguments to find a Party
     * @example
     * // Get one Party
     * const party = await prisma.party.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartyFindFirstOrThrowArgs>(args?: SelectSubset<T, PartyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parties
     * const parties = await prisma.party.findMany()
     * 
     * // Get first 10 Parties
     * const parties = await prisma.party.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partyWithIdOnly = await prisma.party.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartyFindManyArgs>(args?: SelectSubset<T, PartyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Party.
     * @param {PartyCreateArgs} args - Arguments to create a Party.
     * @example
     * // Create one Party
     * const Party = await prisma.party.create({
     *   data: {
     *     // ... data to create a Party
     *   }
     * })
     * 
     */
    create<T extends PartyCreateArgs>(args: SelectSubset<T, PartyCreateArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parties.
     * @param {PartyCreateManyArgs} args - Arguments to create many Parties.
     * @example
     * // Create many Parties
     * const party = await prisma.party.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartyCreateManyArgs>(args?: SelectSubset<T, PartyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parties and returns the data saved in the database.
     * @param {PartyCreateManyAndReturnArgs} args - Arguments to create many Parties.
     * @example
     * // Create many Parties
     * const party = await prisma.party.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parties and only return the `id`
     * const partyWithIdOnly = await prisma.party.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartyCreateManyAndReturnArgs>(args?: SelectSubset<T, PartyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Party.
     * @param {PartyDeleteArgs} args - Arguments to delete one Party.
     * @example
     * // Delete one Party
     * const Party = await prisma.party.delete({
     *   where: {
     *     // ... filter to delete one Party
     *   }
     * })
     * 
     */
    delete<T extends PartyDeleteArgs>(args: SelectSubset<T, PartyDeleteArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Party.
     * @param {PartyUpdateArgs} args - Arguments to update one Party.
     * @example
     * // Update one Party
     * const party = await prisma.party.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartyUpdateArgs>(args: SelectSubset<T, PartyUpdateArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parties.
     * @param {PartyDeleteManyArgs} args - Arguments to filter Parties to delete.
     * @example
     * // Delete a few Parties
     * const { count } = await prisma.party.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartyDeleteManyArgs>(args?: SelectSubset<T, PartyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parties
     * const party = await prisma.party.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartyUpdateManyArgs>(args: SelectSubset<T, PartyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parties and returns the data updated in the database.
     * @param {PartyUpdateManyAndReturnArgs} args - Arguments to update many Parties.
     * @example
     * // Update many Parties
     * const party = await prisma.party.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parties and only return the `id`
     * const partyWithIdOnly = await prisma.party.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PartyUpdateManyAndReturnArgs>(args: SelectSubset<T, PartyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Party.
     * @param {PartyUpsertArgs} args - Arguments to update or create a Party.
     * @example
     * // Update or create a Party
     * const party = await prisma.party.upsert({
     *   create: {
     *     // ... data to create a Party
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Party we want to update
     *   }
     * })
     */
    upsert<T extends PartyUpsertArgs>(args: SelectSubset<T, PartyUpsertArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyCountArgs} args - Arguments to filter Parties to count.
     * @example
     * // Count the number of Parties
     * const count = await prisma.party.count({
     *   where: {
     *     // ... the filter for the Parties we want to count
     *   }
     * })
    **/
    count<T extends PartyCountArgs>(
      args?: Subset<T, PartyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Party.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartyAggregateArgs>(args: Subset<T, PartyAggregateArgs>): Prisma.PrismaPromise<GetPartyAggregateType<T>>

    /**
     * Group by Party.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartyGroupByArgs['orderBy'] }
        : { orderBy?: PartyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Party model
   */
  readonly fields: PartyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Party.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    queueCurrent<T extends Party$queueCurrentArgs<ExtArgs> = {}>(args?: Subset<T, Party$queueCurrentArgs<ExtArgs>>): Prisma__QueueItemClient<$Result.GetResult<Prisma.$QueueItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    queueHead<T extends Party$queueHeadArgs<ExtArgs> = {}>(args?: Subset<T, Party$queueHeadArgs<ExtArgs>>): Prisma__QueueItemClient<$Result.GetResult<Prisma.$QueueItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    queueTail<T extends Party$queueTailArgs<ExtArgs> = {}>(args?: Subset<T, Party$queueTailArgs<ExtArgs>>): Prisma__QueueItemClient<$Result.GetResult<Prisma.$QueueItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    members<T extends Party$membersArgs<ExtArgs> = {}>(args?: Subset<T, Party$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartyMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    queue<T extends Party$queueArgs<ExtArgs> = {}>(args?: Subset<T, Party$queueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueueItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Party model
   */
  interface PartyFieldRefs {
    readonly id: FieldRef<"Party", 'String'>
    readonly name: FieldRef<"Party", 'String'>
    readonly positionMS: FieldRef<"Party", 'Int'>
    readonly startedAt: FieldRef<"Party", 'DateTime'>
    readonly status: FieldRef<"Party", 'PlaybackStatus'>
    readonly autoplay: FieldRef<"Party", 'AutoplayType'>
    readonly headId: FieldRef<"Party", 'String'>
    readonly tailId: FieldRef<"Party", 'String'>
    readonly currentId: FieldRef<"Party", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Party findUnique
   */
  export type PartyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * Filter, which Party to fetch.
     */
    where: PartyWhereUniqueInput
  }

  /**
   * Party findUniqueOrThrow
   */
  export type PartyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * Filter, which Party to fetch.
     */
    where: PartyWhereUniqueInput
  }

  /**
   * Party findFirst
   */
  export type PartyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * Filter, which Party to fetch.
     */
    where?: PartyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parties to fetch.
     */
    orderBy?: PartyOrderByWithRelationInput | PartyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parties.
     */
    cursor?: PartyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parties.
     */
    distinct?: PartyScalarFieldEnum | PartyScalarFieldEnum[]
  }

  /**
   * Party findFirstOrThrow
   */
  export type PartyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * Filter, which Party to fetch.
     */
    where?: PartyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parties to fetch.
     */
    orderBy?: PartyOrderByWithRelationInput | PartyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parties.
     */
    cursor?: PartyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parties.
     */
    distinct?: PartyScalarFieldEnum | PartyScalarFieldEnum[]
  }

  /**
   * Party findMany
   */
  export type PartyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * Filter, which Parties to fetch.
     */
    where?: PartyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parties to fetch.
     */
    orderBy?: PartyOrderByWithRelationInput | PartyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parties.
     */
    cursor?: PartyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parties.
     */
    skip?: number
    distinct?: PartyScalarFieldEnum | PartyScalarFieldEnum[]
  }

  /**
   * Party create
   */
  export type PartyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * The data needed to create a Party.
     */
    data: XOR<PartyCreateInput, PartyUncheckedCreateInput>
  }

  /**
   * Party createMany
   */
  export type PartyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parties.
     */
    data: PartyCreateManyInput | PartyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Party createManyAndReturn
   */
  export type PartyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * The data used to create many Parties.
     */
    data: PartyCreateManyInput | PartyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Party update
   */
  export type PartyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * The data needed to update a Party.
     */
    data: XOR<PartyUpdateInput, PartyUncheckedUpdateInput>
    /**
     * Choose, which Party to update.
     */
    where: PartyWhereUniqueInput
  }

  /**
   * Party updateMany
   */
  export type PartyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parties.
     */
    data: XOR<PartyUpdateManyMutationInput, PartyUncheckedUpdateManyInput>
    /**
     * Filter which Parties to update
     */
    where?: PartyWhereInput
    /**
     * Limit how many Parties to update.
     */
    limit?: number
  }

  /**
   * Party updateManyAndReturn
   */
  export type PartyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * The data used to update Parties.
     */
    data: XOR<PartyUpdateManyMutationInput, PartyUncheckedUpdateManyInput>
    /**
     * Filter which Parties to update
     */
    where?: PartyWhereInput
    /**
     * Limit how many Parties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Party upsert
   */
  export type PartyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * The filter to search for the Party to update in case it exists.
     */
    where: PartyWhereUniqueInput
    /**
     * In case the Party found by the `where` argument doesn't exist, create a new Party with this data.
     */
    create: XOR<PartyCreateInput, PartyUncheckedCreateInput>
    /**
     * In case the Party was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartyUpdateInput, PartyUncheckedUpdateInput>
  }

  /**
   * Party delete
   */
  export type PartyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * Filter which Party to delete.
     */
    where: PartyWhereUniqueInput
  }

  /**
   * Party deleteMany
   */
  export type PartyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parties to delete
     */
    where?: PartyWhereInput
    /**
     * Limit how many Parties to delete.
     */
    limit?: number
  }

  /**
   * Party.queueCurrent
   */
  export type Party$queueCurrentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueItem
     */
    select?: QueueItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueueItem
     */
    omit?: QueueItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueItemInclude<ExtArgs> | null
    where?: QueueItemWhereInput
  }

  /**
   * Party.queueHead
   */
  export type Party$queueHeadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueItem
     */
    select?: QueueItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueueItem
     */
    omit?: QueueItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueItemInclude<ExtArgs> | null
    where?: QueueItemWhereInput
  }

  /**
   * Party.queueTail
   */
  export type Party$queueTailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueItem
     */
    select?: QueueItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueueItem
     */
    omit?: QueueItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueItemInclude<ExtArgs> | null
    where?: QueueItemWhereInput
  }

  /**
   * Party.members
   */
  export type Party$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyMember
     */
    omit?: PartyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyMemberInclude<ExtArgs> | null
    where?: PartyMemberWhereInput
    orderBy?: PartyMemberOrderByWithRelationInput | PartyMemberOrderByWithRelationInput[]
    cursor?: PartyMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartyMemberScalarFieldEnum | PartyMemberScalarFieldEnum[]
  }

  /**
   * Party.queue
   */
  export type Party$queueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueItem
     */
    select?: QueueItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueueItem
     */
    omit?: QueueItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueItemInclude<ExtArgs> | null
    where?: QueueItemWhereInput
    orderBy?: QueueItemOrderByWithRelationInput | QueueItemOrderByWithRelationInput[]
    cursor?: QueueItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QueueItemScalarFieldEnum | QueueItemScalarFieldEnum[]
  }

  /**
   * Party without action
   */
  export type PartyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
  }


  /**
   * Model PartyMember
   */

  export type AggregatePartyMember = {
    _count: PartyMemberCountAggregateOutputType | null
    _min: PartyMemberMinAggregateOutputType | null
    _max: PartyMemberMaxAggregateOutputType | null
  }

  export type PartyMemberMinAggregateOutputType = {
    id: string | null
    userId: string | null
    partyId: string | null
  }

  export type PartyMemberMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    partyId: string | null
  }

  export type PartyMemberCountAggregateOutputType = {
    id: number
    permissions: number
    userId: number
    partyId: number
    _all: number
  }


  export type PartyMemberMinAggregateInputType = {
    id?: true
    userId?: true
    partyId?: true
  }

  export type PartyMemberMaxAggregateInputType = {
    id?: true
    userId?: true
    partyId?: true
  }

  export type PartyMemberCountAggregateInputType = {
    id?: true
    permissions?: true
    userId?: true
    partyId?: true
    _all?: true
  }

  export type PartyMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartyMember to aggregate.
     */
    where?: PartyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartyMembers to fetch.
     */
    orderBy?: PartyMemberOrderByWithRelationInput | PartyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartyMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PartyMembers
    **/
    _count?: true | PartyMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartyMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartyMemberMaxAggregateInputType
  }

  export type GetPartyMemberAggregateType<T extends PartyMemberAggregateArgs> = {
        [P in keyof T & keyof AggregatePartyMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartyMember[P]>
      : GetScalarType<T[P], AggregatePartyMember[P]>
  }




  export type PartyMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartyMemberWhereInput
    orderBy?: PartyMemberOrderByWithAggregationInput | PartyMemberOrderByWithAggregationInput[]
    by: PartyMemberScalarFieldEnum[] | PartyMemberScalarFieldEnum
    having?: PartyMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartyMemberCountAggregateInputType | true
    _min?: PartyMemberMinAggregateInputType
    _max?: PartyMemberMaxAggregateInputType
  }

  export type PartyMemberGroupByOutputType = {
    id: string
    permissions: boolean[]
    userId: string
    partyId: string
    _count: PartyMemberCountAggregateOutputType | null
    _min: PartyMemberMinAggregateOutputType | null
    _max: PartyMemberMaxAggregateOutputType | null
  }

  type GetPartyMemberGroupByPayload<T extends PartyMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartyMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartyMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartyMemberGroupByOutputType[P]>
            : GetScalarType<T[P], PartyMemberGroupByOutputType[P]>
        }
      >
    >


  export type PartyMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    permissions?: boolean
    userId?: boolean
    partyId?: boolean
    party?: boolean | PartyDefaultArgs<ExtArgs>
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partyMember"]>

  export type PartyMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    permissions?: boolean
    userId?: boolean
    partyId?: boolean
    party?: boolean | PartyDefaultArgs<ExtArgs>
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partyMember"]>

  export type PartyMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    permissions?: boolean
    userId?: boolean
    partyId?: boolean
    party?: boolean | PartyDefaultArgs<ExtArgs>
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partyMember"]>

  export type PartyMemberSelectScalar = {
    id?: boolean
    permissions?: boolean
    userId?: boolean
    partyId?: boolean
  }

  export type PartyMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "permissions" | "userId" | "partyId", ExtArgs["result"]["partyMember"]>
  export type PartyMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    party?: boolean | PartyDefaultArgs<ExtArgs>
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type PartyMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    party?: boolean | PartyDefaultArgs<ExtArgs>
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type PartyMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    party?: boolean | PartyDefaultArgs<ExtArgs>
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $PartyMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PartyMember"
    objects: {
      party: Prisma.$PartyPayload<ExtArgs>
      user: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      permissions: boolean[]
      userId: string
      partyId: string
    }, ExtArgs["result"]["partyMember"]>
    composites: {}
  }

  type PartyMemberGetPayload<S extends boolean | null | undefined | PartyMemberDefaultArgs> = $Result.GetResult<Prisma.$PartyMemberPayload, S>

  type PartyMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartyMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartyMemberCountAggregateInputType | true
    }

  export interface PartyMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PartyMember'], meta: { name: 'PartyMember' } }
    /**
     * Find zero or one PartyMember that matches the filter.
     * @param {PartyMemberFindUniqueArgs} args - Arguments to find a PartyMember
     * @example
     * // Get one PartyMember
     * const partyMember = await prisma.partyMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartyMemberFindUniqueArgs>(args: SelectSubset<T, PartyMemberFindUniqueArgs<ExtArgs>>): Prisma__PartyMemberClient<$Result.GetResult<Prisma.$PartyMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PartyMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartyMemberFindUniqueOrThrowArgs} args - Arguments to find a PartyMember
     * @example
     * // Get one PartyMember
     * const partyMember = await prisma.partyMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartyMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, PartyMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartyMemberClient<$Result.GetResult<Prisma.$PartyMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartyMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyMemberFindFirstArgs} args - Arguments to find a PartyMember
     * @example
     * // Get one PartyMember
     * const partyMember = await prisma.partyMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartyMemberFindFirstArgs>(args?: SelectSubset<T, PartyMemberFindFirstArgs<ExtArgs>>): Prisma__PartyMemberClient<$Result.GetResult<Prisma.$PartyMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartyMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyMemberFindFirstOrThrowArgs} args - Arguments to find a PartyMember
     * @example
     * // Get one PartyMember
     * const partyMember = await prisma.partyMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartyMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, PartyMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartyMemberClient<$Result.GetResult<Prisma.$PartyMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PartyMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartyMembers
     * const partyMembers = await prisma.partyMember.findMany()
     * 
     * // Get first 10 PartyMembers
     * const partyMembers = await prisma.partyMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partyMemberWithIdOnly = await prisma.partyMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartyMemberFindManyArgs>(args?: SelectSubset<T, PartyMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartyMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PartyMember.
     * @param {PartyMemberCreateArgs} args - Arguments to create a PartyMember.
     * @example
     * // Create one PartyMember
     * const PartyMember = await prisma.partyMember.create({
     *   data: {
     *     // ... data to create a PartyMember
     *   }
     * })
     * 
     */
    create<T extends PartyMemberCreateArgs>(args: SelectSubset<T, PartyMemberCreateArgs<ExtArgs>>): Prisma__PartyMemberClient<$Result.GetResult<Prisma.$PartyMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PartyMembers.
     * @param {PartyMemberCreateManyArgs} args - Arguments to create many PartyMembers.
     * @example
     * // Create many PartyMembers
     * const partyMember = await prisma.partyMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartyMemberCreateManyArgs>(args?: SelectSubset<T, PartyMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PartyMembers and returns the data saved in the database.
     * @param {PartyMemberCreateManyAndReturnArgs} args - Arguments to create many PartyMembers.
     * @example
     * // Create many PartyMembers
     * const partyMember = await prisma.partyMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PartyMembers and only return the `id`
     * const partyMemberWithIdOnly = await prisma.partyMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartyMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, PartyMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartyMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PartyMember.
     * @param {PartyMemberDeleteArgs} args - Arguments to delete one PartyMember.
     * @example
     * // Delete one PartyMember
     * const PartyMember = await prisma.partyMember.delete({
     *   where: {
     *     // ... filter to delete one PartyMember
     *   }
     * })
     * 
     */
    delete<T extends PartyMemberDeleteArgs>(args: SelectSubset<T, PartyMemberDeleteArgs<ExtArgs>>): Prisma__PartyMemberClient<$Result.GetResult<Prisma.$PartyMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PartyMember.
     * @param {PartyMemberUpdateArgs} args - Arguments to update one PartyMember.
     * @example
     * // Update one PartyMember
     * const partyMember = await prisma.partyMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartyMemberUpdateArgs>(args: SelectSubset<T, PartyMemberUpdateArgs<ExtArgs>>): Prisma__PartyMemberClient<$Result.GetResult<Prisma.$PartyMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PartyMembers.
     * @param {PartyMemberDeleteManyArgs} args - Arguments to filter PartyMembers to delete.
     * @example
     * // Delete a few PartyMembers
     * const { count } = await prisma.partyMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartyMemberDeleteManyArgs>(args?: SelectSubset<T, PartyMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartyMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartyMembers
     * const partyMember = await prisma.partyMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartyMemberUpdateManyArgs>(args: SelectSubset<T, PartyMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartyMembers and returns the data updated in the database.
     * @param {PartyMemberUpdateManyAndReturnArgs} args - Arguments to update many PartyMembers.
     * @example
     * // Update many PartyMembers
     * const partyMember = await prisma.partyMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PartyMembers and only return the `id`
     * const partyMemberWithIdOnly = await prisma.partyMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PartyMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, PartyMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartyMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PartyMember.
     * @param {PartyMemberUpsertArgs} args - Arguments to update or create a PartyMember.
     * @example
     * // Update or create a PartyMember
     * const partyMember = await prisma.partyMember.upsert({
     *   create: {
     *     // ... data to create a PartyMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartyMember we want to update
     *   }
     * })
     */
    upsert<T extends PartyMemberUpsertArgs>(args: SelectSubset<T, PartyMemberUpsertArgs<ExtArgs>>): Prisma__PartyMemberClient<$Result.GetResult<Prisma.$PartyMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PartyMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyMemberCountArgs} args - Arguments to filter PartyMembers to count.
     * @example
     * // Count the number of PartyMembers
     * const count = await prisma.partyMember.count({
     *   where: {
     *     // ... the filter for the PartyMembers we want to count
     *   }
     * })
    **/
    count<T extends PartyMemberCountArgs>(
      args?: Subset<T, PartyMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartyMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PartyMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartyMemberAggregateArgs>(args: Subset<T, PartyMemberAggregateArgs>): Prisma.PrismaPromise<GetPartyMemberAggregateType<T>>

    /**
     * Group by PartyMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartyMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartyMemberGroupByArgs['orderBy'] }
        : { orderBy?: PartyMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartyMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartyMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PartyMember model
   */
  readonly fields: PartyMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PartyMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartyMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    party<T extends PartyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartyDefaultArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PartyMember model
   */
  interface PartyMemberFieldRefs {
    readonly id: FieldRef<"PartyMember", 'String'>
    readonly permissions: FieldRef<"PartyMember", 'Boolean[]'>
    readonly userId: FieldRef<"PartyMember", 'String'>
    readonly partyId: FieldRef<"PartyMember", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PartyMember findUnique
   */
  export type PartyMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyMember
     */
    omit?: PartyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyMemberInclude<ExtArgs> | null
    /**
     * Filter, which PartyMember to fetch.
     */
    where: PartyMemberWhereUniqueInput
  }

  /**
   * PartyMember findUniqueOrThrow
   */
  export type PartyMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyMember
     */
    omit?: PartyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyMemberInclude<ExtArgs> | null
    /**
     * Filter, which PartyMember to fetch.
     */
    where: PartyMemberWhereUniqueInput
  }

  /**
   * PartyMember findFirst
   */
  export type PartyMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyMember
     */
    omit?: PartyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyMemberInclude<ExtArgs> | null
    /**
     * Filter, which PartyMember to fetch.
     */
    where?: PartyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartyMembers to fetch.
     */
    orderBy?: PartyMemberOrderByWithRelationInput | PartyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartyMembers.
     */
    cursor?: PartyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartyMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartyMembers.
     */
    distinct?: PartyMemberScalarFieldEnum | PartyMemberScalarFieldEnum[]
  }

  /**
   * PartyMember findFirstOrThrow
   */
  export type PartyMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyMember
     */
    omit?: PartyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyMemberInclude<ExtArgs> | null
    /**
     * Filter, which PartyMember to fetch.
     */
    where?: PartyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartyMembers to fetch.
     */
    orderBy?: PartyMemberOrderByWithRelationInput | PartyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartyMembers.
     */
    cursor?: PartyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartyMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartyMembers.
     */
    distinct?: PartyMemberScalarFieldEnum | PartyMemberScalarFieldEnum[]
  }

  /**
   * PartyMember findMany
   */
  export type PartyMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyMember
     */
    omit?: PartyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyMemberInclude<ExtArgs> | null
    /**
     * Filter, which PartyMembers to fetch.
     */
    where?: PartyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartyMembers to fetch.
     */
    orderBy?: PartyMemberOrderByWithRelationInput | PartyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PartyMembers.
     */
    cursor?: PartyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartyMembers.
     */
    skip?: number
    distinct?: PartyMemberScalarFieldEnum | PartyMemberScalarFieldEnum[]
  }

  /**
   * PartyMember create
   */
  export type PartyMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyMember
     */
    omit?: PartyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a PartyMember.
     */
    data: XOR<PartyMemberCreateInput, PartyMemberUncheckedCreateInput>
  }

  /**
   * PartyMember createMany
   */
  export type PartyMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PartyMembers.
     */
    data: PartyMemberCreateManyInput | PartyMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PartyMember createManyAndReturn
   */
  export type PartyMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartyMember
     */
    omit?: PartyMemberOmit<ExtArgs> | null
    /**
     * The data used to create many PartyMembers.
     */
    data: PartyMemberCreateManyInput | PartyMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PartyMember update
   */
  export type PartyMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyMember
     */
    omit?: PartyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a PartyMember.
     */
    data: XOR<PartyMemberUpdateInput, PartyMemberUncheckedUpdateInput>
    /**
     * Choose, which PartyMember to update.
     */
    where: PartyMemberWhereUniqueInput
  }

  /**
   * PartyMember updateMany
   */
  export type PartyMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PartyMembers.
     */
    data: XOR<PartyMemberUpdateManyMutationInput, PartyMemberUncheckedUpdateManyInput>
    /**
     * Filter which PartyMembers to update
     */
    where?: PartyMemberWhereInput
    /**
     * Limit how many PartyMembers to update.
     */
    limit?: number
  }

  /**
   * PartyMember updateManyAndReturn
   */
  export type PartyMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartyMember
     */
    omit?: PartyMemberOmit<ExtArgs> | null
    /**
     * The data used to update PartyMembers.
     */
    data: XOR<PartyMemberUpdateManyMutationInput, PartyMemberUncheckedUpdateManyInput>
    /**
     * Filter which PartyMembers to update
     */
    where?: PartyMemberWhereInput
    /**
     * Limit how many PartyMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PartyMember upsert
   */
  export type PartyMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyMember
     */
    omit?: PartyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the PartyMember to update in case it exists.
     */
    where: PartyMemberWhereUniqueInput
    /**
     * In case the PartyMember found by the `where` argument doesn't exist, create a new PartyMember with this data.
     */
    create: XOR<PartyMemberCreateInput, PartyMemberUncheckedCreateInput>
    /**
     * In case the PartyMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartyMemberUpdateInput, PartyMemberUncheckedUpdateInput>
  }

  /**
   * PartyMember delete
   */
  export type PartyMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyMember
     */
    omit?: PartyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyMemberInclude<ExtArgs> | null
    /**
     * Filter which PartyMember to delete.
     */
    where: PartyMemberWhereUniqueInput
  }

  /**
   * PartyMember deleteMany
   */
  export type PartyMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartyMembers to delete
     */
    where?: PartyMemberWhereInput
    /**
     * Limit how many PartyMembers to delete.
     */
    limit?: number
  }

  /**
   * PartyMember without action
   */
  export type PartyMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyMember
     */
    omit?: PartyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyMemberInclude<ExtArgs> | null
  }


  /**
   * Model QueueItem
   */

  export type AggregateQueueItem = {
    _count: QueueItemCountAggregateOutputType | null
    _min: QueueItemMinAggregateOutputType | null
    _max: QueueItemMaxAggregateOutputType | null
  }

  export type QueueItemMinAggregateOutputType = {
    id: string | null
    status: $Enums.ItemStatus | null
    partyId: string | null
    prevId: string | null
    nextId: string | null
  }

  export type QueueItemMaxAggregateOutputType = {
    id: string | null
    status: $Enums.ItemStatus | null
    partyId: string | null
    prevId: string | null
    nextId: string | null
  }

  export type QueueItemCountAggregateOutputType = {
    id: number
    status: number
    partyId: number
    prevId: number
    nextId: number
    _all: number
  }


  export type QueueItemMinAggregateInputType = {
    id?: true
    status?: true
    partyId?: true
    prevId?: true
    nextId?: true
  }

  export type QueueItemMaxAggregateInputType = {
    id?: true
    status?: true
    partyId?: true
    prevId?: true
    nextId?: true
  }

  export type QueueItemCountAggregateInputType = {
    id?: true
    status?: true
    partyId?: true
    prevId?: true
    nextId?: true
    _all?: true
  }

  export type QueueItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QueueItem to aggregate.
     */
    where?: QueueItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueueItems to fetch.
     */
    orderBy?: QueueItemOrderByWithRelationInput | QueueItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QueueItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueueItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueueItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QueueItems
    **/
    _count?: true | QueueItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QueueItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QueueItemMaxAggregateInputType
  }

  export type GetQueueItemAggregateType<T extends QueueItemAggregateArgs> = {
        [P in keyof T & keyof AggregateQueueItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQueueItem[P]>
      : GetScalarType<T[P], AggregateQueueItem[P]>
  }




  export type QueueItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueueItemWhereInput
    orderBy?: QueueItemOrderByWithAggregationInput | QueueItemOrderByWithAggregationInput[]
    by: QueueItemScalarFieldEnum[] | QueueItemScalarFieldEnum
    having?: QueueItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QueueItemCountAggregateInputType | true
    _min?: QueueItemMinAggregateInputType
    _max?: QueueItemMaxAggregateInputType
  }

  export type QueueItemGroupByOutputType = {
    id: string
    status: $Enums.ItemStatus
    partyId: string
    prevId: string | null
    nextId: string | null
    _count: QueueItemCountAggregateOutputType | null
    _min: QueueItemMinAggregateOutputType | null
    _max: QueueItemMaxAggregateOutputType | null
  }

  type GetQueueItemGroupByPayload<T extends QueueItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QueueItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QueueItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QueueItemGroupByOutputType[P]>
            : GetScalarType<T[P], QueueItemGroupByOutputType[P]>
        }
      >
    >


  export type QueueItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    partyId?: boolean
    prevId?: boolean
    nextId?: boolean
    queueCurrent?: boolean | QueueItem$queueCurrentArgs<ExtArgs>
    queueHead?: boolean | QueueItem$queueHeadArgs<ExtArgs>
    queueTail?: boolean | QueueItem$queueTailArgs<ExtArgs>
    next?: boolean | QueueItem$nextArgs<ExtArgs>
    nextItem?: boolean | QueueItem$nextItemArgs<ExtArgs>
    party?: boolean | PartyDefaultArgs<ExtArgs>
    prev?: boolean | QueueItem$prevArgs<ExtArgs>
    prevItem?: boolean | QueueItem$prevItemArgs<ExtArgs>
  }, ExtArgs["result"]["queueItem"]>

  export type QueueItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    partyId?: boolean
    prevId?: boolean
    nextId?: boolean
    next?: boolean | QueueItem$nextArgs<ExtArgs>
    party?: boolean | PartyDefaultArgs<ExtArgs>
    prev?: boolean | QueueItem$prevArgs<ExtArgs>
  }, ExtArgs["result"]["queueItem"]>

  export type QueueItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    partyId?: boolean
    prevId?: boolean
    nextId?: boolean
    next?: boolean | QueueItem$nextArgs<ExtArgs>
    party?: boolean | PartyDefaultArgs<ExtArgs>
    prev?: boolean | QueueItem$prevArgs<ExtArgs>
  }, ExtArgs["result"]["queueItem"]>

  export type QueueItemSelectScalar = {
    id?: boolean
    status?: boolean
    partyId?: boolean
    prevId?: boolean
    nextId?: boolean
  }

  export type QueueItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "partyId" | "prevId" | "nextId", ExtArgs["result"]["queueItem"]>
  export type QueueItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    queueCurrent?: boolean | QueueItem$queueCurrentArgs<ExtArgs>
    queueHead?: boolean | QueueItem$queueHeadArgs<ExtArgs>
    queueTail?: boolean | QueueItem$queueTailArgs<ExtArgs>
    next?: boolean | QueueItem$nextArgs<ExtArgs>
    nextItem?: boolean | QueueItem$nextItemArgs<ExtArgs>
    party?: boolean | PartyDefaultArgs<ExtArgs>
    prev?: boolean | QueueItem$prevArgs<ExtArgs>
    prevItem?: boolean | QueueItem$prevItemArgs<ExtArgs>
  }
  export type QueueItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    next?: boolean | QueueItem$nextArgs<ExtArgs>
    party?: boolean | PartyDefaultArgs<ExtArgs>
    prev?: boolean | QueueItem$prevArgs<ExtArgs>
  }
  export type QueueItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    next?: boolean | QueueItem$nextArgs<ExtArgs>
    party?: boolean | PartyDefaultArgs<ExtArgs>
    prev?: boolean | QueueItem$prevArgs<ExtArgs>
  }

  export type $QueueItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QueueItem"
    objects: {
      queueCurrent: Prisma.$PartyPayload<ExtArgs> | null
      queueHead: Prisma.$PartyPayload<ExtArgs> | null
      queueTail: Prisma.$PartyPayload<ExtArgs> | null
      next: Prisma.$QueueItemPayload<ExtArgs> | null
      nextItem: Prisma.$QueueItemPayload<ExtArgs> | null
      party: Prisma.$PartyPayload<ExtArgs>
      prev: Prisma.$QueueItemPayload<ExtArgs> | null
      prevItem: Prisma.$QueueItemPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.ItemStatus
      partyId: string
      prevId: string | null
      nextId: string | null
    }, ExtArgs["result"]["queueItem"]>
    composites: {}
  }

  type QueueItemGetPayload<S extends boolean | null | undefined | QueueItemDefaultArgs> = $Result.GetResult<Prisma.$QueueItemPayload, S>

  type QueueItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QueueItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QueueItemCountAggregateInputType | true
    }

  export interface QueueItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QueueItem'], meta: { name: 'QueueItem' } }
    /**
     * Find zero or one QueueItem that matches the filter.
     * @param {QueueItemFindUniqueArgs} args - Arguments to find a QueueItem
     * @example
     * // Get one QueueItem
     * const queueItem = await prisma.queueItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QueueItemFindUniqueArgs>(args: SelectSubset<T, QueueItemFindUniqueArgs<ExtArgs>>): Prisma__QueueItemClient<$Result.GetResult<Prisma.$QueueItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QueueItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QueueItemFindUniqueOrThrowArgs} args - Arguments to find a QueueItem
     * @example
     * // Get one QueueItem
     * const queueItem = await prisma.queueItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QueueItemFindUniqueOrThrowArgs>(args: SelectSubset<T, QueueItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QueueItemClient<$Result.GetResult<Prisma.$QueueItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QueueItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueItemFindFirstArgs} args - Arguments to find a QueueItem
     * @example
     * // Get one QueueItem
     * const queueItem = await prisma.queueItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QueueItemFindFirstArgs>(args?: SelectSubset<T, QueueItemFindFirstArgs<ExtArgs>>): Prisma__QueueItemClient<$Result.GetResult<Prisma.$QueueItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QueueItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueItemFindFirstOrThrowArgs} args - Arguments to find a QueueItem
     * @example
     * // Get one QueueItem
     * const queueItem = await prisma.queueItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QueueItemFindFirstOrThrowArgs>(args?: SelectSubset<T, QueueItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__QueueItemClient<$Result.GetResult<Prisma.$QueueItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QueueItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QueueItems
     * const queueItems = await prisma.queueItem.findMany()
     * 
     * // Get first 10 QueueItems
     * const queueItems = await prisma.queueItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const queueItemWithIdOnly = await prisma.queueItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QueueItemFindManyArgs>(args?: SelectSubset<T, QueueItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueueItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QueueItem.
     * @param {QueueItemCreateArgs} args - Arguments to create a QueueItem.
     * @example
     * // Create one QueueItem
     * const QueueItem = await prisma.queueItem.create({
     *   data: {
     *     // ... data to create a QueueItem
     *   }
     * })
     * 
     */
    create<T extends QueueItemCreateArgs>(args: SelectSubset<T, QueueItemCreateArgs<ExtArgs>>): Prisma__QueueItemClient<$Result.GetResult<Prisma.$QueueItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QueueItems.
     * @param {QueueItemCreateManyArgs} args - Arguments to create many QueueItems.
     * @example
     * // Create many QueueItems
     * const queueItem = await prisma.queueItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QueueItemCreateManyArgs>(args?: SelectSubset<T, QueueItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QueueItems and returns the data saved in the database.
     * @param {QueueItemCreateManyAndReturnArgs} args - Arguments to create many QueueItems.
     * @example
     * // Create many QueueItems
     * const queueItem = await prisma.queueItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QueueItems and only return the `id`
     * const queueItemWithIdOnly = await prisma.queueItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QueueItemCreateManyAndReturnArgs>(args?: SelectSubset<T, QueueItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueueItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QueueItem.
     * @param {QueueItemDeleteArgs} args - Arguments to delete one QueueItem.
     * @example
     * // Delete one QueueItem
     * const QueueItem = await prisma.queueItem.delete({
     *   where: {
     *     // ... filter to delete one QueueItem
     *   }
     * })
     * 
     */
    delete<T extends QueueItemDeleteArgs>(args: SelectSubset<T, QueueItemDeleteArgs<ExtArgs>>): Prisma__QueueItemClient<$Result.GetResult<Prisma.$QueueItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QueueItem.
     * @param {QueueItemUpdateArgs} args - Arguments to update one QueueItem.
     * @example
     * // Update one QueueItem
     * const queueItem = await prisma.queueItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QueueItemUpdateArgs>(args: SelectSubset<T, QueueItemUpdateArgs<ExtArgs>>): Prisma__QueueItemClient<$Result.GetResult<Prisma.$QueueItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QueueItems.
     * @param {QueueItemDeleteManyArgs} args - Arguments to filter QueueItems to delete.
     * @example
     * // Delete a few QueueItems
     * const { count } = await prisma.queueItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QueueItemDeleteManyArgs>(args?: SelectSubset<T, QueueItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QueueItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QueueItems
     * const queueItem = await prisma.queueItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QueueItemUpdateManyArgs>(args: SelectSubset<T, QueueItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QueueItems and returns the data updated in the database.
     * @param {QueueItemUpdateManyAndReturnArgs} args - Arguments to update many QueueItems.
     * @example
     * // Update many QueueItems
     * const queueItem = await prisma.queueItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QueueItems and only return the `id`
     * const queueItemWithIdOnly = await prisma.queueItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QueueItemUpdateManyAndReturnArgs>(args: SelectSubset<T, QueueItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueueItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QueueItem.
     * @param {QueueItemUpsertArgs} args - Arguments to update or create a QueueItem.
     * @example
     * // Update or create a QueueItem
     * const queueItem = await prisma.queueItem.upsert({
     *   create: {
     *     // ... data to create a QueueItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QueueItem we want to update
     *   }
     * })
     */
    upsert<T extends QueueItemUpsertArgs>(args: SelectSubset<T, QueueItemUpsertArgs<ExtArgs>>): Prisma__QueueItemClient<$Result.GetResult<Prisma.$QueueItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QueueItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueItemCountArgs} args - Arguments to filter QueueItems to count.
     * @example
     * // Count the number of QueueItems
     * const count = await prisma.queueItem.count({
     *   where: {
     *     // ... the filter for the QueueItems we want to count
     *   }
     * })
    **/
    count<T extends QueueItemCountArgs>(
      args?: Subset<T, QueueItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QueueItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QueueItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QueueItemAggregateArgs>(args: Subset<T, QueueItemAggregateArgs>): Prisma.PrismaPromise<GetQueueItemAggregateType<T>>

    /**
     * Group by QueueItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QueueItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QueueItemGroupByArgs['orderBy'] }
        : { orderBy?: QueueItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QueueItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQueueItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QueueItem model
   */
  readonly fields: QueueItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QueueItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QueueItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    queueCurrent<T extends QueueItem$queueCurrentArgs<ExtArgs> = {}>(args?: Subset<T, QueueItem$queueCurrentArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    queueHead<T extends QueueItem$queueHeadArgs<ExtArgs> = {}>(args?: Subset<T, QueueItem$queueHeadArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    queueTail<T extends QueueItem$queueTailArgs<ExtArgs> = {}>(args?: Subset<T, QueueItem$queueTailArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    next<T extends QueueItem$nextArgs<ExtArgs> = {}>(args?: Subset<T, QueueItem$nextArgs<ExtArgs>>): Prisma__QueueItemClient<$Result.GetResult<Prisma.$QueueItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    nextItem<T extends QueueItem$nextItemArgs<ExtArgs> = {}>(args?: Subset<T, QueueItem$nextItemArgs<ExtArgs>>): Prisma__QueueItemClient<$Result.GetResult<Prisma.$QueueItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    party<T extends PartyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartyDefaultArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prev<T extends QueueItem$prevArgs<ExtArgs> = {}>(args?: Subset<T, QueueItem$prevArgs<ExtArgs>>): Prisma__QueueItemClient<$Result.GetResult<Prisma.$QueueItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    prevItem<T extends QueueItem$prevItemArgs<ExtArgs> = {}>(args?: Subset<T, QueueItem$prevItemArgs<ExtArgs>>): Prisma__QueueItemClient<$Result.GetResult<Prisma.$QueueItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QueueItem model
   */
  interface QueueItemFieldRefs {
    readonly id: FieldRef<"QueueItem", 'String'>
    readonly status: FieldRef<"QueueItem", 'ItemStatus'>
    readonly partyId: FieldRef<"QueueItem", 'String'>
    readonly prevId: FieldRef<"QueueItem", 'String'>
    readonly nextId: FieldRef<"QueueItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QueueItem findUnique
   */
  export type QueueItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueItem
     */
    select?: QueueItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueueItem
     */
    omit?: QueueItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueItemInclude<ExtArgs> | null
    /**
     * Filter, which QueueItem to fetch.
     */
    where: QueueItemWhereUniqueInput
  }

  /**
   * QueueItem findUniqueOrThrow
   */
  export type QueueItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueItem
     */
    select?: QueueItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueueItem
     */
    omit?: QueueItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueItemInclude<ExtArgs> | null
    /**
     * Filter, which QueueItem to fetch.
     */
    where: QueueItemWhereUniqueInput
  }

  /**
   * QueueItem findFirst
   */
  export type QueueItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueItem
     */
    select?: QueueItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueueItem
     */
    omit?: QueueItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueItemInclude<ExtArgs> | null
    /**
     * Filter, which QueueItem to fetch.
     */
    where?: QueueItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueueItems to fetch.
     */
    orderBy?: QueueItemOrderByWithRelationInput | QueueItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QueueItems.
     */
    cursor?: QueueItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueueItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueueItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QueueItems.
     */
    distinct?: QueueItemScalarFieldEnum | QueueItemScalarFieldEnum[]
  }

  /**
   * QueueItem findFirstOrThrow
   */
  export type QueueItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueItem
     */
    select?: QueueItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueueItem
     */
    omit?: QueueItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueItemInclude<ExtArgs> | null
    /**
     * Filter, which QueueItem to fetch.
     */
    where?: QueueItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueueItems to fetch.
     */
    orderBy?: QueueItemOrderByWithRelationInput | QueueItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QueueItems.
     */
    cursor?: QueueItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueueItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueueItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QueueItems.
     */
    distinct?: QueueItemScalarFieldEnum | QueueItemScalarFieldEnum[]
  }

  /**
   * QueueItem findMany
   */
  export type QueueItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueItem
     */
    select?: QueueItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueueItem
     */
    omit?: QueueItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueItemInclude<ExtArgs> | null
    /**
     * Filter, which QueueItems to fetch.
     */
    where?: QueueItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueueItems to fetch.
     */
    orderBy?: QueueItemOrderByWithRelationInput | QueueItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QueueItems.
     */
    cursor?: QueueItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueueItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueueItems.
     */
    skip?: number
    distinct?: QueueItemScalarFieldEnum | QueueItemScalarFieldEnum[]
  }

  /**
   * QueueItem create
   */
  export type QueueItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueItem
     */
    select?: QueueItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueueItem
     */
    omit?: QueueItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueItemInclude<ExtArgs> | null
    /**
     * The data needed to create a QueueItem.
     */
    data: XOR<QueueItemCreateInput, QueueItemUncheckedCreateInput>
  }

  /**
   * QueueItem createMany
   */
  export type QueueItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QueueItems.
     */
    data: QueueItemCreateManyInput | QueueItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QueueItem createManyAndReturn
   */
  export type QueueItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueItem
     */
    select?: QueueItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QueueItem
     */
    omit?: QueueItemOmit<ExtArgs> | null
    /**
     * The data used to create many QueueItems.
     */
    data: QueueItemCreateManyInput | QueueItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QueueItem update
   */
  export type QueueItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueItem
     */
    select?: QueueItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueueItem
     */
    omit?: QueueItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueItemInclude<ExtArgs> | null
    /**
     * The data needed to update a QueueItem.
     */
    data: XOR<QueueItemUpdateInput, QueueItemUncheckedUpdateInput>
    /**
     * Choose, which QueueItem to update.
     */
    where: QueueItemWhereUniqueInput
  }

  /**
   * QueueItem updateMany
   */
  export type QueueItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QueueItems.
     */
    data: XOR<QueueItemUpdateManyMutationInput, QueueItemUncheckedUpdateManyInput>
    /**
     * Filter which QueueItems to update
     */
    where?: QueueItemWhereInput
    /**
     * Limit how many QueueItems to update.
     */
    limit?: number
  }

  /**
   * QueueItem updateManyAndReturn
   */
  export type QueueItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueItem
     */
    select?: QueueItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QueueItem
     */
    omit?: QueueItemOmit<ExtArgs> | null
    /**
     * The data used to update QueueItems.
     */
    data: XOR<QueueItemUpdateManyMutationInput, QueueItemUncheckedUpdateManyInput>
    /**
     * Filter which QueueItems to update
     */
    where?: QueueItemWhereInput
    /**
     * Limit how many QueueItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QueueItem upsert
   */
  export type QueueItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueItem
     */
    select?: QueueItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueueItem
     */
    omit?: QueueItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueItemInclude<ExtArgs> | null
    /**
     * The filter to search for the QueueItem to update in case it exists.
     */
    where: QueueItemWhereUniqueInput
    /**
     * In case the QueueItem found by the `where` argument doesn't exist, create a new QueueItem with this data.
     */
    create: XOR<QueueItemCreateInput, QueueItemUncheckedCreateInput>
    /**
     * In case the QueueItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QueueItemUpdateInput, QueueItemUncheckedUpdateInput>
  }

  /**
   * QueueItem delete
   */
  export type QueueItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueItem
     */
    select?: QueueItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueueItem
     */
    omit?: QueueItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueItemInclude<ExtArgs> | null
    /**
     * Filter which QueueItem to delete.
     */
    where: QueueItemWhereUniqueInput
  }

  /**
   * QueueItem deleteMany
   */
  export type QueueItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QueueItems to delete
     */
    where?: QueueItemWhereInput
    /**
     * Limit how many QueueItems to delete.
     */
    limit?: number
  }

  /**
   * QueueItem.queueCurrent
   */
  export type QueueItem$queueCurrentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    where?: PartyWhereInput
  }

  /**
   * QueueItem.queueHead
   */
  export type QueueItem$queueHeadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    where?: PartyWhereInput
  }

  /**
   * QueueItem.queueTail
   */
  export type QueueItem$queueTailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    where?: PartyWhereInput
  }

  /**
   * QueueItem.next
   */
  export type QueueItem$nextArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueItem
     */
    select?: QueueItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueueItem
     */
    omit?: QueueItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueItemInclude<ExtArgs> | null
    where?: QueueItemWhereInput
  }

  /**
   * QueueItem.nextItem
   */
  export type QueueItem$nextItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueItem
     */
    select?: QueueItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueueItem
     */
    omit?: QueueItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueItemInclude<ExtArgs> | null
    where?: QueueItemWhereInput
  }

  /**
   * QueueItem.prev
   */
  export type QueueItem$prevArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueItem
     */
    select?: QueueItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueueItem
     */
    omit?: QueueItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueItemInclude<ExtArgs> | null
    where?: QueueItemWhereInput
  }

  /**
   * QueueItem.prevItem
   */
  export type QueueItem$prevItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueItem
     */
    select?: QueueItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueueItem
     */
    omit?: QueueItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueItemInclude<ExtArgs> | null
    where?: QueueItemWhereInput
  }

  /**
   * QueueItem without action
   */
  export type QueueItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueItem
     */
    select?: QueueItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueueItem
     */
    omit?: QueueItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    conntectedSpotify: 'conntectedSpotify',
    nextConnectSpotify: 'nextConnectSpotify'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const PartyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    positionMS: 'positionMS',
    startedAt: 'startedAt',
    status: 'status',
    autoplay: 'autoplay',
    headId: 'headId',
    tailId: 'tailId',
    currentId: 'currentId'
  };

  export type PartyScalarFieldEnum = (typeof PartyScalarFieldEnum)[keyof typeof PartyScalarFieldEnum]


  export const PartyMemberScalarFieldEnum: {
    id: 'id',
    permissions: 'permissions',
    userId: 'userId',
    partyId: 'partyId'
  };

  export type PartyMemberScalarFieldEnum = (typeof PartyMemberScalarFieldEnum)[keyof typeof PartyMemberScalarFieldEnum]


  export const QueueItemScalarFieldEnum: {
    id: 'id',
    status: 'status',
    partyId: 'partyId',
    prevId: 'prevId',
    nextId: 'nextId'
  };

  export type QueueItemScalarFieldEnum = (typeof QueueItemScalarFieldEnum)[keyof typeof QueueItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PlaybackStatus'
   */
  export type EnumPlaybackStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlaybackStatus'>
    


  /**
   * Reference to a field of type 'PlaybackStatus[]'
   */
  export type ListEnumPlaybackStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlaybackStatus[]'>
    


  /**
   * Reference to a field of type 'AutoplayType'
   */
  export type EnumAutoplayTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AutoplayType'>
    


  /**
   * Reference to a field of type 'AutoplayType[]'
   */
  export type ListEnumAutoplayTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AutoplayType[]'>
    


  /**
   * Reference to a field of type 'Boolean[]'
   */
  export type ListBooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean[]'>
    


  /**
   * Reference to a field of type 'ItemStatus'
   */
  export type EnumItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemStatus'>
    


  /**
   * Reference to a field of type 'ItemStatus[]'
   */
  export type ListEnumItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    name?: StringNullableFilter<"Profile"> | string | null
    email?: StringFilter<"Profile"> | string
    conntectedSpotify?: BoolFilter<"Profile"> | boolean
    nextConnectSpotify?: DateTimeFilter<"Profile"> | Date | string
    partyMemberships?: XOR<PartyMemberNullableScalarRelationFilter, PartyMemberWhereInput> | null
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    conntectedSpotify?: SortOrder
    nextConnectSpotify?: SortOrder
    partyMemberships?: PartyMemberOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    name?: StringNullableFilter<"Profile"> | string | null
    conntectedSpotify?: BoolFilter<"Profile"> | boolean
    nextConnectSpotify?: DateTimeFilter<"Profile"> | Date | string
    partyMemberships?: XOR<PartyMemberNullableScalarRelationFilter, PartyMemberWhereInput> | null
  }, "id" | "email">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    conntectedSpotify?: SortOrder
    nextConnectSpotify?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    name?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    email?: StringWithAggregatesFilter<"Profile"> | string
    conntectedSpotify?: BoolWithAggregatesFilter<"Profile"> | boolean
    nextConnectSpotify?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type PartyWhereInput = {
    AND?: PartyWhereInput | PartyWhereInput[]
    OR?: PartyWhereInput[]
    NOT?: PartyWhereInput | PartyWhereInput[]
    id?: StringFilter<"Party"> | string
    name?: StringFilter<"Party"> | string
    positionMS?: IntFilter<"Party"> | number
    startedAt?: DateTimeNullableFilter<"Party"> | Date | string | null
    status?: EnumPlaybackStatusFilter<"Party"> | $Enums.PlaybackStatus
    autoplay?: EnumAutoplayTypeFilter<"Party"> | $Enums.AutoplayType
    headId?: StringNullableFilter<"Party"> | string | null
    tailId?: StringNullableFilter<"Party"> | string | null
    currentId?: StringNullableFilter<"Party"> | string | null
    queueCurrent?: XOR<QueueItemNullableScalarRelationFilter, QueueItemWhereInput> | null
    queueHead?: XOR<QueueItemNullableScalarRelationFilter, QueueItemWhereInput> | null
    queueTail?: XOR<QueueItemNullableScalarRelationFilter, QueueItemWhereInput> | null
    members?: PartyMemberListRelationFilter
    queue?: QueueItemListRelationFilter
  }

  export type PartyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    positionMS?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    autoplay?: SortOrder
    headId?: SortOrderInput | SortOrder
    tailId?: SortOrderInput | SortOrder
    currentId?: SortOrderInput | SortOrder
    queueCurrent?: QueueItemOrderByWithRelationInput
    queueHead?: QueueItemOrderByWithRelationInput
    queueTail?: QueueItemOrderByWithRelationInput
    members?: PartyMemberOrderByRelationAggregateInput
    queue?: QueueItemOrderByRelationAggregateInput
  }

  export type PartyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    headId?: string
    tailId?: string
    currentId?: string
    AND?: PartyWhereInput | PartyWhereInput[]
    OR?: PartyWhereInput[]
    NOT?: PartyWhereInput | PartyWhereInput[]
    name?: StringFilter<"Party"> | string
    positionMS?: IntFilter<"Party"> | number
    startedAt?: DateTimeNullableFilter<"Party"> | Date | string | null
    status?: EnumPlaybackStatusFilter<"Party"> | $Enums.PlaybackStatus
    autoplay?: EnumAutoplayTypeFilter<"Party"> | $Enums.AutoplayType
    queueCurrent?: XOR<QueueItemNullableScalarRelationFilter, QueueItemWhereInput> | null
    queueHead?: XOR<QueueItemNullableScalarRelationFilter, QueueItemWhereInput> | null
    queueTail?: XOR<QueueItemNullableScalarRelationFilter, QueueItemWhereInput> | null
    members?: PartyMemberListRelationFilter
    queue?: QueueItemListRelationFilter
  }, "id" | "headId" | "tailId" | "currentId">

  export type PartyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    positionMS?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    autoplay?: SortOrder
    headId?: SortOrderInput | SortOrder
    tailId?: SortOrderInput | SortOrder
    currentId?: SortOrderInput | SortOrder
    _count?: PartyCountOrderByAggregateInput
    _avg?: PartyAvgOrderByAggregateInput
    _max?: PartyMaxOrderByAggregateInput
    _min?: PartyMinOrderByAggregateInput
    _sum?: PartySumOrderByAggregateInput
  }

  export type PartyScalarWhereWithAggregatesInput = {
    AND?: PartyScalarWhereWithAggregatesInput | PartyScalarWhereWithAggregatesInput[]
    OR?: PartyScalarWhereWithAggregatesInput[]
    NOT?: PartyScalarWhereWithAggregatesInput | PartyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Party"> | string
    name?: StringWithAggregatesFilter<"Party"> | string
    positionMS?: IntWithAggregatesFilter<"Party"> | number
    startedAt?: DateTimeNullableWithAggregatesFilter<"Party"> | Date | string | null
    status?: EnumPlaybackStatusWithAggregatesFilter<"Party"> | $Enums.PlaybackStatus
    autoplay?: EnumAutoplayTypeWithAggregatesFilter<"Party"> | $Enums.AutoplayType
    headId?: StringNullableWithAggregatesFilter<"Party"> | string | null
    tailId?: StringNullableWithAggregatesFilter<"Party"> | string | null
    currentId?: StringNullableWithAggregatesFilter<"Party"> | string | null
  }

  export type PartyMemberWhereInput = {
    AND?: PartyMemberWhereInput | PartyMemberWhereInput[]
    OR?: PartyMemberWhereInput[]
    NOT?: PartyMemberWhereInput | PartyMemberWhereInput[]
    id?: StringFilter<"PartyMember"> | string
    permissions?: BoolNullableListFilter<"PartyMember">
    userId?: StringFilter<"PartyMember"> | string
    partyId?: StringFilter<"PartyMember"> | string
    party?: XOR<PartyScalarRelationFilter, PartyWhereInput>
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type PartyMemberOrderByWithRelationInput = {
    id?: SortOrder
    permissions?: SortOrder
    userId?: SortOrder
    partyId?: SortOrder
    party?: PartyOrderByWithRelationInput
    user?: ProfileOrderByWithRelationInput
  }

  export type PartyMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    partyId_userId?: PartyMemberPartyIdUserIdCompoundUniqueInput
    AND?: PartyMemberWhereInput | PartyMemberWhereInput[]
    OR?: PartyMemberWhereInput[]
    NOT?: PartyMemberWhereInput | PartyMemberWhereInput[]
    permissions?: BoolNullableListFilter<"PartyMember">
    partyId?: StringFilter<"PartyMember"> | string
    party?: XOR<PartyScalarRelationFilter, PartyWhereInput>
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id" | "userId" | "partyId_userId">

  export type PartyMemberOrderByWithAggregationInput = {
    id?: SortOrder
    permissions?: SortOrder
    userId?: SortOrder
    partyId?: SortOrder
    _count?: PartyMemberCountOrderByAggregateInput
    _max?: PartyMemberMaxOrderByAggregateInput
    _min?: PartyMemberMinOrderByAggregateInput
  }

  export type PartyMemberScalarWhereWithAggregatesInput = {
    AND?: PartyMemberScalarWhereWithAggregatesInput | PartyMemberScalarWhereWithAggregatesInput[]
    OR?: PartyMemberScalarWhereWithAggregatesInput[]
    NOT?: PartyMemberScalarWhereWithAggregatesInput | PartyMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PartyMember"> | string
    permissions?: BoolNullableListFilter<"PartyMember">
    userId?: StringWithAggregatesFilter<"PartyMember"> | string
    partyId?: StringWithAggregatesFilter<"PartyMember"> | string
  }

  export type QueueItemWhereInput = {
    AND?: QueueItemWhereInput | QueueItemWhereInput[]
    OR?: QueueItemWhereInput[]
    NOT?: QueueItemWhereInput | QueueItemWhereInput[]
    id?: StringFilter<"QueueItem"> | string
    status?: EnumItemStatusFilter<"QueueItem"> | $Enums.ItemStatus
    partyId?: StringFilter<"QueueItem"> | string
    prevId?: StringNullableFilter<"QueueItem"> | string | null
    nextId?: StringNullableFilter<"QueueItem"> | string | null
    queueCurrent?: XOR<PartyNullableScalarRelationFilter, PartyWhereInput> | null
    queueHead?: XOR<PartyNullableScalarRelationFilter, PartyWhereInput> | null
    queueTail?: XOR<PartyNullableScalarRelationFilter, PartyWhereInput> | null
    next?: XOR<QueueItemNullableScalarRelationFilter, QueueItemWhereInput> | null
    nextItem?: XOR<QueueItemNullableScalarRelationFilter, QueueItemWhereInput> | null
    party?: XOR<PartyScalarRelationFilter, PartyWhereInput>
    prev?: XOR<QueueItemNullableScalarRelationFilter, QueueItemWhereInput> | null
    prevItem?: XOR<QueueItemNullableScalarRelationFilter, QueueItemWhereInput> | null
  }

  export type QueueItemOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    partyId?: SortOrder
    prevId?: SortOrderInput | SortOrder
    nextId?: SortOrderInput | SortOrder
    queueCurrent?: PartyOrderByWithRelationInput
    queueHead?: PartyOrderByWithRelationInput
    queueTail?: PartyOrderByWithRelationInput
    next?: QueueItemOrderByWithRelationInput
    nextItem?: QueueItemOrderByWithRelationInput
    party?: PartyOrderByWithRelationInput
    prev?: QueueItemOrderByWithRelationInput
    prevItem?: QueueItemOrderByWithRelationInput
  }

  export type QueueItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    prevId?: string
    nextId?: string
    AND?: QueueItemWhereInput | QueueItemWhereInput[]
    OR?: QueueItemWhereInput[]
    NOT?: QueueItemWhereInput | QueueItemWhereInput[]
    status?: EnumItemStatusFilter<"QueueItem"> | $Enums.ItemStatus
    partyId?: StringFilter<"QueueItem"> | string
    queueCurrent?: XOR<PartyNullableScalarRelationFilter, PartyWhereInput> | null
    queueHead?: XOR<PartyNullableScalarRelationFilter, PartyWhereInput> | null
    queueTail?: XOR<PartyNullableScalarRelationFilter, PartyWhereInput> | null
    next?: XOR<QueueItemNullableScalarRelationFilter, QueueItemWhereInput> | null
    nextItem?: XOR<QueueItemNullableScalarRelationFilter, QueueItemWhereInput> | null
    party?: XOR<PartyScalarRelationFilter, PartyWhereInput>
    prev?: XOR<QueueItemNullableScalarRelationFilter, QueueItemWhereInput> | null
    prevItem?: XOR<QueueItemNullableScalarRelationFilter, QueueItemWhereInput> | null
  }, "id" | "prevId" | "nextId">

  export type QueueItemOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    partyId?: SortOrder
    prevId?: SortOrderInput | SortOrder
    nextId?: SortOrderInput | SortOrder
    _count?: QueueItemCountOrderByAggregateInput
    _max?: QueueItemMaxOrderByAggregateInput
    _min?: QueueItemMinOrderByAggregateInput
  }

  export type QueueItemScalarWhereWithAggregatesInput = {
    AND?: QueueItemScalarWhereWithAggregatesInput | QueueItemScalarWhereWithAggregatesInput[]
    OR?: QueueItemScalarWhereWithAggregatesInput[]
    NOT?: QueueItemScalarWhereWithAggregatesInput | QueueItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QueueItem"> | string
    status?: EnumItemStatusWithAggregatesFilter<"QueueItem"> | $Enums.ItemStatus
    partyId?: StringWithAggregatesFilter<"QueueItem"> | string
    prevId?: StringNullableWithAggregatesFilter<"QueueItem"> | string | null
    nextId?: StringNullableWithAggregatesFilter<"QueueItem"> | string | null
  }

  export type ProfileCreateInput = {
    id: string
    name?: string | null
    email: string
    conntectedSpotify?: boolean
    nextConnectSpotify?: Date | string
    partyMemberships?: PartyMemberCreateNestedOneWithoutUserInput
  }

  export type ProfileUncheckedCreateInput = {
    id: string
    name?: string | null
    email: string
    conntectedSpotify?: boolean
    nextConnectSpotify?: Date | string
    partyMemberships?: PartyMemberUncheckedCreateNestedOneWithoutUserInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    conntectedSpotify?: BoolFieldUpdateOperationsInput | boolean
    nextConnectSpotify?: DateTimeFieldUpdateOperationsInput | Date | string
    partyMemberships?: PartyMemberUpdateOneWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    conntectedSpotify?: BoolFieldUpdateOperationsInput | boolean
    nextConnectSpotify?: DateTimeFieldUpdateOperationsInput | Date | string
    partyMemberships?: PartyMemberUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ProfileCreateManyInput = {
    id: string
    name?: string | null
    email: string
    conntectedSpotify?: boolean
    nextConnectSpotify?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    conntectedSpotify?: BoolFieldUpdateOperationsInput | boolean
    nextConnectSpotify?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    conntectedSpotify?: BoolFieldUpdateOperationsInput | boolean
    nextConnectSpotify?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyCreateInput = {
    id: string
    name: string
    positionMS?: number
    startedAt?: Date | string | null
    status?: $Enums.PlaybackStatus
    autoplay?: $Enums.AutoplayType
    queueCurrent?: QueueItemCreateNestedOneWithoutQueueCurrentInput
    queueHead?: QueueItemCreateNestedOneWithoutQueueHeadInput
    queueTail?: QueueItemCreateNestedOneWithoutQueueTailInput
    members?: PartyMemberCreateNestedManyWithoutPartyInput
    queue?: QueueItemCreateNestedManyWithoutPartyInput
  }

  export type PartyUncheckedCreateInput = {
    id: string
    name: string
    positionMS?: number
    startedAt?: Date | string | null
    status?: $Enums.PlaybackStatus
    autoplay?: $Enums.AutoplayType
    headId?: string | null
    tailId?: string | null
    currentId?: string | null
    members?: PartyMemberUncheckedCreateNestedManyWithoutPartyInput
    queue?: QueueItemUncheckedCreateNestedManyWithoutPartyInput
  }

  export type PartyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    positionMS?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPlaybackStatusFieldUpdateOperationsInput | $Enums.PlaybackStatus
    autoplay?: EnumAutoplayTypeFieldUpdateOperationsInput | $Enums.AutoplayType
    queueCurrent?: QueueItemUpdateOneWithoutQueueCurrentNestedInput
    queueHead?: QueueItemUpdateOneWithoutQueueHeadNestedInput
    queueTail?: QueueItemUpdateOneWithoutQueueTailNestedInput
    members?: PartyMemberUpdateManyWithoutPartyNestedInput
    queue?: QueueItemUpdateManyWithoutPartyNestedInput
  }

  export type PartyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    positionMS?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPlaybackStatusFieldUpdateOperationsInput | $Enums.PlaybackStatus
    autoplay?: EnumAutoplayTypeFieldUpdateOperationsInput | $Enums.AutoplayType
    headId?: NullableStringFieldUpdateOperationsInput | string | null
    tailId?: NullableStringFieldUpdateOperationsInput | string | null
    currentId?: NullableStringFieldUpdateOperationsInput | string | null
    members?: PartyMemberUncheckedUpdateManyWithoutPartyNestedInput
    queue?: QueueItemUncheckedUpdateManyWithoutPartyNestedInput
  }

  export type PartyCreateManyInput = {
    id: string
    name: string
    positionMS?: number
    startedAt?: Date | string | null
    status?: $Enums.PlaybackStatus
    autoplay?: $Enums.AutoplayType
    headId?: string | null
    tailId?: string | null
    currentId?: string | null
  }

  export type PartyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    positionMS?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPlaybackStatusFieldUpdateOperationsInput | $Enums.PlaybackStatus
    autoplay?: EnumAutoplayTypeFieldUpdateOperationsInput | $Enums.AutoplayType
  }

  export type PartyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    positionMS?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPlaybackStatusFieldUpdateOperationsInput | $Enums.PlaybackStatus
    autoplay?: EnumAutoplayTypeFieldUpdateOperationsInput | $Enums.AutoplayType
    headId?: NullableStringFieldUpdateOperationsInput | string | null
    tailId?: NullableStringFieldUpdateOperationsInput | string | null
    currentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartyMemberCreateInput = {
    id: string
    permissions?: PartyMemberCreatepermissionsInput | boolean[]
    party: PartyCreateNestedOneWithoutMembersInput
    user: ProfileCreateNestedOneWithoutPartyMembershipsInput
  }

  export type PartyMemberUncheckedCreateInput = {
    id: string
    permissions?: PartyMemberCreatepermissionsInput | boolean[]
    userId: string
    partyId: string
  }

  export type PartyMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissions?: PartyMemberUpdatepermissionsInput | boolean[]
    party?: PartyUpdateOneRequiredWithoutMembersNestedInput
    user?: ProfileUpdateOneRequiredWithoutPartyMembershipsNestedInput
  }

  export type PartyMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissions?: PartyMemberUpdatepermissionsInput | boolean[]
    userId?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
  }

  export type PartyMemberCreateManyInput = {
    id: string
    permissions?: PartyMemberCreatepermissionsInput | boolean[]
    userId: string
    partyId: string
  }

  export type PartyMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissions?: PartyMemberUpdatepermissionsInput | boolean[]
  }

  export type PartyMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissions?: PartyMemberUpdatepermissionsInput | boolean[]
    userId?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
  }

  export type QueueItemCreateInput = {
    id?: string
    status: $Enums.ItemStatus
    queueCurrent?: PartyCreateNestedOneWithoutQueueCurrentInput
    queueHead?: PartyCreateNestedOneWithoutQueueHeadInput
    queueTail?: PartyCreateNestedOneWithoutQueueTailInput
    next?: QueueItemCreateNestedOneWithoutNextItemInput
    nextItem?: QueueItemCreateNestedOneWithoutNextInput
    party: PartyCreateNestedOneWithoutQueueInput
    prev?: QueueItemCreateNestedOneWithoutPrevItemInput
    prevItem?: QueueItemCreateNestedOneWithoutPrevInput
  }

  export type QueueItemUncheckedCreateInput = {
    id?: string
    status: $Enums.ItemStatus
    partyId: string
    prevId?: string | null
    nextId?: string | null
    queueCurrent?: PartyUncheckedCreateNestedOneWithoutQueueCurrentInput
    queueHead?: PartyUncheckedCreateNestedOneWithoutQueueHeadInput
    queueTail?: PartyUncheckedCreateNestedOneWithoutQueueTailInput
    nextItem?: QueueItemUncheckedCreateNestedOneWithoutNextInput
    prevItem?: QueueItemUncheckedCreateNestedOneWithoutPrevInput
  }

  export type QueueItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    queueCurrent?: PartyUpdateOneWithoutQueueCurrentNestedInput
    queueHead?: PartyUpdateOneWithoutQueueHeadNestedInput
    queueTail?: PartyUpdateOneWithoutQueueTailNestedInput
    next?: QueueItemUpdateOneWithoutNextItemNestedInput
    nextItem?: QueueItemUpdateOneWithoutNextNestedInput
    party?: PartyUpdateOneRequiredWithoutQueueNestedInput
    prev?: QueueItemUpdateOneWithoutPrevItemNestedInput
    prevItem?: QueueItemUpdateOneWithoutPrevNestedInput
  }

  export type QueueItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    partyId?: StringFieldUpdateOperationsInput | string
    prevId?: NullableStringFieldUpdateOperationsInput | string | null
    nextId?: NullableStringFieldUpdateOperationsInput | string | null
    queueCurrent?: PartyUncheckedUpdateOneWithoutQueueCurrentNestedInput
    queueHead?: PartyUncheckedUpdateOneWithoutQueueHeadNestedInput
    queueTail?: PartyUncheckedUpdateOneWithoutQueueTailNestedInput
    nextItem?: QueueItemUncheckedUpdateOneWithoutNextNestedInput
    prevItem?: QueueItemUncheckedUpdateOneWithoutPrevNestedInput
  }

  export type QueueItemCreateManyInput = {
    id?: string
    status: $Enums.ItemStatus
    partyId: string
    prevId?: string | null
    nextId?: string | null
  }

  export type QueueItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
  }

  export type QueueItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    partyId?: StringFieldUpdateOperationsInput | string
    prevId?: NullableStringFieldUpdateOperationsInput | string | null
    nextId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PartyMemberNullableScalarRelationFilter = {
    is?: PartyMemberWhereInput | null
    isNot?: PartyMemberWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    conntectedSpotify?: SortOrder
    nextConnectSpotify?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    conntectedSpotify?: SortOrder
    nextConnectSpotify?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    conntectedSpotify?: SortOrder
    nextConnectSpotify?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumPlaybackStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlaybackStatus | EnumPlaybackStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlaybackStatus[] | ListEnumPlaybackStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlaybackStatus[] | ListEnumPlaybackStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlaybackStatusFilter<$PrismaModel> | $Enums.PlaybackStatus
  }

  export type EnumAutoplayTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AutoplayType | EnumAutoplayTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AutoplayType[] | ListEnumAutoplayTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AutoplayType[] | ListEnumAutoplayTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAutoplayTypeFilter<$PrismaModel> | $Enums.AutoplayType
  }

  export type QueueItemNullableScalarRelationFilter = {
    is?: QueueItemWhereInput | null
    isNot?: QueueItemWhereInput | null
  }

  export type PartyMemberListRelationFilter = {
    every?: PartyMemberWhereInput
    some?: PartyMemberWhereInput
    none?: PartyMemberWhereInput
  }

  export type QueueItemListRelationFilter = {
    every?: QueueItemWhereInput
    some?: QueueItemWhereInput
    none?: QueueItemWhereInput
  }

  export type PartyMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QueueItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    positionMS?: SortOrder
    startedAt?: SortOrder
    status?: SortOrder
    autoplay?: SortOrder
    headId?: SortOrder
    tailId?: SortOrder
    currentId?: SortOrder
  }

  export type PartyAvgOrderByAggregateInput = {
    positionMS?: SortOrder
  }

  export type PartyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    positionMS?: SortOrder
    startedAt?: SortOrder
    status?: SortOrder
    autoplay?: SortOrder
    headId?: SortOrder
    tailId?: SortOrder
    currentId?: SortOrder
  }

  export type PartyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    positionMS?: SortOrder
    startedAt?: SortOrder
    status?: SortOrder
    autoplay?: SortOrder
    headId?: SortOrder
    tailId?: SortOrder
    currentId?: SortOrder
  }

  export type PartySumOrderByAggregateInput = {
    positionMS?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumPlaybackStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlaybackStatus | EnumPlaybackStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlaybackStatus[] | ListEnumPlaybackStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlaybackStatus[] | ListEnumPlaybackStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlaybackStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlaybackStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlaybackStatusFilter<$PrismaModel>
    _max?: NestedEnumPlaybackStatusFilter<$PrismaModel>
  }

  export type EnumAutoplayTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AutoplayType | EnumAutoplayTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AutoplayType[] | ListEnumAutoplayTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AutoplayType[] | ListEnumAutoplayTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAutoplayTypeWithAggregatesFilter<$PrismaModel> | $Enums.AutoplayType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAutoplayTypeFilter<$PrismaModel>
    _max?: NestedEnumAutoplayTypeFilter<$PrismaModel>
  }

  export type BoolNullableListFilter<$PrismaModel = never> = {
    equals?: boolean[] | ListBooleanFieldRefInput<$PrismaModel> | null
    has?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    hasEvery?: boolean[] | ListBooleanFieldRefInput<$PrismaModel>
    hasSome?: boolean[] | ListBooleanFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type PartyScalarRelationFilter = {
    is?: PartyWhereInput
    isNot?: PartyWhereInput
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type PartyMemberPartyIdUserIdCompoundUniqueInput = {
    partyId: string
    userId: string
  }

  export type PartyMemberCountOrderByAggregateInput = {
    id?: SortOrder
    permissions?: SortOrder
    userId?: SortOrder
    partyId?: SortOrder
  }

  export type PartyMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    partyId?: SortOrder
  }

  export type PartyMemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    partyId?: SortOrder
  }

  export type EnumItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusFilter<$PrismaModel> | $Enums.ItemStatus
  }

  export type PartyNullableScalarRelationFilter = {
    is?: PartyWhereInput | null
    isNot?: PartyWhereInput | null
  }

  export type QueueItemCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    partyId?: SortOrder
    prevId?: SortOrder
    nextId?: SortOrder
  }

  export type QueueItemMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    partyId?: SortOrder
    prevId?: SortOrder
    nextId?: SortOrder
  }

  export type QueueItemMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    partyId?: SortOrder
    prevId?: SortOrder
    nextId?: SortOrder
  }

  export type EnumItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemStatusFilter<$PrismaModel>
    _max?: NestedEnumItemStatusFilter<$PrismaModel>
  }

  export type PartyMemberCreateNestedOneWithoutUserInput = {
    create?: XOR<PartyMemberCreateWithoutUserInput, PartyMemberUncheckedCreateWithoutUserInput>
    connectOrCreate?: PartyMemberCreateOrConnectWithoutUserInput
    connect?: PartyMemberWhereUniqueInput
  }

  export type PartyMemberUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PartyMemberCreateWithoutUserInput, PartyMemberUncheckedCreateWithoutUserInput>
    connectOrCreate?: PartyMemberCreateOrConnectWithoutUserInput
    connect?: PartyMemberWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PartyMemberUpdateOneWithoutUserNestedInput = {
    create?: XOR<PartyMemberCreateWithoutUserInput, PartyMemberUncheckedCreateWithoutUserInput>
    connectOrCreate?: PartyMemberCreateOrConnectWithoutUserInput
    upsert?: PartyMemberUpsertWithoutUserInput
    disconnect?: PartyMemberWhereInput | boolean
    delete?: PartyMemberWhereInput | boolean
    connect?: PartyMemberWhereUniqueInput
    update?: XOR<XOR<PartyMemberUpdateToOneWithWhereWithoutUserInput, PartyMemberUpdateWithoutUserInput>, PartyMemberUncheckedUpdateWithoutUserInput>
  }

  export type PartyMemberUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PartyMemberCreateWithoutUserInput, PartyMemberUncheckedCreateWithoutUserInput>
    connectOrCreate?: PartyMemberCreateOrConnectWithoutUserInput
    upsert?: PartyMemberUpsertWithoutUserInput
    disconnect?: PartyMemberWhereInput | boolean
    delete?: PartyMemberWhereInput | boolean
    connect?: PartyMemberWhereUniqueInput
    update?: XOR<XOR<PartyMemberUpdateToOneWithWhereWithoutUserInput, PartyMemberUpdateWithoutUserInput>, PartyMemberUncheckedUpdateWithoutUserInput>
  }

  export type QueueItemCreateNestedOneWithoutQueueCurrentInput = {
    create?: XOR<QueueItemCreateWithoutQueueCurrentInput, QueueItemUncheckedCreateWithoutQueueCurrentInput>
    connectOrCreate?: QueueItemCreateOrConnectWithoutQueueCurrentInput
    connect?: QueueItemWhereUniqueInput
  }

  export type QueueItemCreateNestedOneWithoutQueueHeadInput = {
    create?: XOR<QueueItemCreateWithoutQueueHeadInput, QueueItemUncheckedCreateWithoutQueueHeadInput>
    connectOrCreate?: QueueItemCreateOrConnectWithoutQueueHeadInput
    connect?: QueueItemWhereUniqueInput
  }

  export type QueueItemCreateNestedOneWithoutQueueTailInput = {
    create?: XOR<QueueItemCreateWithoutQueueTailInput, QueueItemUncheckedCreateWithoutQueueTailInput>
    connectOrCreate?: QueueItemCreateOrConnectWithoutQueueTailInput
    connect?: QueueItemWhereUniqueInput
  }

  export type PartyMemberCreateNestedManyWithoutPartyInput = {
    create?: XOR<PartyMemberCreateWithoutPartyInput, PartyMemberUncheckedCreateWithoutPartyInput> | PartyMemberCreateWithoutPartyInput[] | PartyMemberUncheckedCreateWithoutPartyInput[]
    connectOrCreate?: PartyMemberCreateOrConnectWithoutPartyInput | PartyMemberCreateOrConnectWithoutPartyInput[]
    createMany?: PartyMemberCreateManyPartyInputEnvelope
    connect?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
  }

  export type QueueItemCreateNestedManyWithoutPartyInput = {
    create?: XOR<QueueItemCreateWithoutPartyInput, QueueItemUncheckedCreateWithoutPartyInput> | QueueItemCreateWithoutPartyInput[] | QueueItemUncheckedCreateWithoutPartyInput[]
    connectOrCreate?: QueueItemCreateOrConnectWithoutPartyInput | QueueItemCreateOrConnectWithoutPartyInput[]
    createMany?: QueueItemCreateManyPartyInputEnvelope
    connect?: QueueItemWhereUniqueInput | QueueItemWhereUniqueInput[]
  }

  export type PartyMemberUncheckedCreateNestedManyWithoutPartyInput = {
    create?: XOR<PartyMemberCreateWithoutPartyInput, PartyMemberUncheckedCreateWithoutPartyInput> | PartyMemberCreateWithoutPartyInput[] | PartyMemberUncheckedCreateWithoutPartyInput[]
    connectOrCreate?: PartyMemberCreateOrConnectWithoutPartyInput | PartyMemberCreateOrConnectWithoutPartyInput[]
    createMany?: PartyMemberCreateManyPartyInputEnvelope
    connect?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
  }

  export type QueueItemUncheckedCreateNestedManyWithoutPartyInput = {
    create?: XOR<QueueItemCreateWithoutPartyInput, QueueItemUncheckedCreateWithoutPartyInput> | QueueItemCreateWithoutPartyInput[] | QueueItemUncheckedCreateWithoutPartyInput[]
    connectOrCreate?: QueueItemCreateOrConnectWithoutPartyInput | QueueItemCreateOrConnectWithoutPartyInput[]
    createMany?: QueueItemCreateManyPartyInputEnvelope
    connect?: QueueItemWhereUniqueInput | QueueItemWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumPlaybackStatusFieldUpdateOperationsInput = {
    set?: $Enums.PlaybackStatus
  }

  export type EnumAutoplayTypeFieldUpdateOperationsInput = {
    set?: $Enums.AutoplayType
  }

  export type QueueItemUpdateOneWithoutQueueCurrentNestedInput = {
    create?: XOR<QueueItemCreateWithoutQueueCurrentInput, QueueItemUncheckedCreateWithoutQueueCurrentInput>
    connectOrCreate?: QueueItemCreateOrConnectWithoutQueueCurrentInput
    upsert?: QueueItemUpsertWithoutQueueCurrentInput
    disconnect?: QueueItemWhereInput | boolean
    delete?: QueueItemWhereInput | boolean
    connect?: QueueItemWhereUniqueInput
    update?: XOR<XOR<QueueItemUpdateToOneWithWhereWithoutQueueCurrentInput, QueueItemUpdateWithoutQueueCurrentInput>, QueueItemUncheckedUpdateWithoutQueueCurrentInput>
  }

  export type QueueItemUpdateOneWithoutQueueHeadNestedInput = {
    create?: XOR<QueueItemCreateWithoutQueueHeadInput, QueueItemUncheckedCreateWithoutQueueHeadInput>
    connectOrCreate?: QueueItemCreateOrConnectWithoutQueueHeadInput
    upsert?: QueueItemUpsertWithoutQueueHeadInput
    disconnect?: QueueItemWhereInput | boolean
    delete?: QueueItemWhereInput | boolean
    connect?: QueueItemWhereUniqueInput
    update?: XOR<XOR<QueueItemUpdateToOneWithWhereWithoutQueueHeadInput, QueueItemUpdateWithoutQueueHeadInput>, QueueItemUncheckedUpdateWithoutQueueHeadInput>
  }

  export type QueueItemUpdateOneWithoutQueueTailNestedInput = {
    create?: XOR<QueueItemCreateWithoutQueueTailInput, QueueItemUncheckedCreateWithoutQueueTailInput>
    connectOrCreate?: QueueItemCreateOrConnectWithoutQueueTailInput
    upsert?: QueueItemUpsertWithoutQueueTailInput
    disconnect?: QueueItemWhereInput | boolean
    delete?: QueueItemWhereInput | boolean
    connect?: QueueItemWhereUniqueInput
    update?: XOR<XOR<QueueItemUpdateToOneWithWhereWithoutQueueTailInput, QueueItemUpdateWithoutQueueTailInput>, QueueItemUncheckedUpdateWithoutQueueTailInput>
  }

  export type PartyMemberUpdateManyWithoutPartyNestedInput = {
    create?: XOR<PartyMemberCreateWithoutPartyInput, PartyMemberUncheckedCreateWithoutPartyInput> | PartyMemberCreateWithoutPartyInput[] | PartyMemberUncheckedCreateWithoutPartyInput[]
    connectOrCreate?: PartyMemberCreateOrConnectWithoutPartyInput | PartyMemberCreateOrConnectWithoutPartyInput[]
    upsert?: PartyMemberUpsertWithWhereUniqueWithoutPartyInput | PartyMemberUpsertWithWhereUniqueWithoutPartyInput[]
    createMany?: PartyMemberCreateManyPartyInputEnvelope
    set?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
    disconnect?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
    delete?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
    connect?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
    update?: PartyMemberUpdateWithWhereUniqueWithoutPartyInput | PartyMemberUpdateWithWhereUniqueWithoutPartyInput[]
    updateMany?: PartyMemberUpdateManyWithWhereWithoutPartyInput | PartyMemberUpdateManyWithWhereWithoutPartyInput[]
    deleteMany?: PartyMemberScalarWhereInput | PartyMemberScalarWhereInput[]
  }

  export type QueueItemUpdateManyWithoutPartyNestedInput = {
    create?: XOR<QueueItemCreateWithoutPartyInput, QueueItemUncheckedCreateWithoutPartyInput> | QueueItemCreateWithoutPartyInput[] | QueueItemUncheckedCreateWithoutPartyInput[]
    connectOrCreate?: QueueItemCreateOrConnectWithoutPartyInput | QueueItemCreateOrConnectWithoutPartyInput[]
    upsert?: QueueItemUpsertWithWhereUniqueWithoutPartyInput | QueueItemUpsertWithWhereUniqueWithoutPartyInput[]
    createMany?: QueueItemCreateManyPartyInputEnvelope
    set?: QueueItemWhereUniqueInput | QueueItemWhereUniqueInput[]
    disconnect?: QueueItemWhereUniqueInput | QueueItemWhereUniqueInput[]
    delete?: QueueItemWhereUniqueInput | QueueItemWhereUniqueInput[]
    connect?: QueueItemWhereUniqueInput | QueueItemWhereUniqueInput[]
    update?: QueueItemUpdateWithWhereUniqueWithoutPartyInput | QueueItemUpdateWithWhereUniqueWithoutPartyInput[]
    updateMany?: QueueItemUpdateManyWithWhereWithoutPartyInput | QueueItemUpdateManyWithWhereWithoutPartyInput[]
    deleteMany?: QueueItemScalarWhereInput | QueueItemScalarWhereInput[]
  }

  export type PartyMemberUncheckedUpdateManyWithoutPartyNestedInput = {
    create?: XOR<PartyMemberCreateWithoutPartyInput, PartyMemberUncheckedCreateWithoutPartyInput> | PartyMemberCreateWithoutPartyInput[] | PartyMemberUncheckedCreateWithoutPartyInput[]
    connectOrCreate?: PartyMemberCreateOrConnectWithoutPartyInput | PartyMemberCreateOrConnectWithoutPartyInput[]
    upsert?: PartyMemberUpsertWithWhereUniqueWithoutPartyInput | PartyMemberUpsertWithWhereUniqueWithoutPartyInput[]
    createMany?: PartyMemberCreateManyPartyInputEnvelope
    set?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
    disconnect?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
    delete?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
    connect?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
    update?: PartyMemberUpdateWithWhereUniqueWithoutPartyInput | PartyMemberUpdateWithWhereUniqueWithoutPartyInput[]
    updateMany?: PartyMemberUpdateManyWithWhereWithoutPartyInput | PartyMemberUpdateManyWithWhereWithoutPartyInput[]
    deleteMany?: PartyMemberScalarWhereInput | PartyMemberScalarWhereInput[]
  }

  export type QueueItemUncheckedUpdateManyWithoutPartyNestedInput = {
    create?: XOR<QueueItemCreateWithoutPartyInput, QueueItemUncheckedCreateWithoutPartyInput> | QueueItemCreateWithoutPartyInput[] | QueueItemUncheckedCreateWithoutPartyInput[]
    connectOrCreate?: QueueItemCreateOrConnectWithoutPartyInput | QueueItemCreateOrConnectWithoutPartyInput[]
    upsert?: QueueItemUpsertWithWhereUniqueWithoutPartyInput | QueueItemUpsertWithWhereUniqueWithoutPartyInput[]
    createMany?: QueueItemCreateManyPartyInputEnvelope
    set?: QueueItemWhereUniqueInput | QueueItemWhereUniqueInput[]
    disconnect?: QueueItemWhereUniqueInput | QueueItemWhereUniqueInput[]
    delete?: QueueItemWhereUniqueInput | QueueItemWhereUniqueInput[]
    connect?: QueueItemWhereUniqueInput | QueueItemWhereUniqueInput[]
    update?: QueueItemUpdateWithWhereUniqueWithoutPartyInput | QueueItemUpdateWithWhereUniqueWithoutPartyInput[]
    updateMany?: QueueItemUpdateManyWithWhereWithoutPartyInput | QueueItemUpdateManyWithWhereWithoutPartyInput[]
    deleteMany?: QueueItemScalarWhereInput | QueueItemScalarWhereInput[]
  }

  export type PartyMemberCreatepermissionsInput = {
    set: boolean[]
  }

  export type PartyCreateNestedOneWithoutMembersInput = {
    create?: XOR<PartyCreateWithoutMembersInput, PartyUncheckedCreateWithoutMembersInput>
    connectOrCreate?: PartyCreateOrConnectWithoutMembersInput
    connect?: PartyWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutPartyMembershipsInput = {
    create?: XOR<ProfileCreateWithoutPartyMembershipsInput, ProfileUncheckedCreateWithoutPartyMembershipsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutPartyMembershipsInput
    connect?: ProfileWhereUniqueInput
  }

  export type PartyMemberUpdatepermissionsInput = {
    set?: boolean[]
    push?: boolean | boolean[]
  }

  export type PartyUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<PartyCreateWithoutMembersInput, PartyUncheckedCreateWithoutMembersInput>
    connectOrCreate?: PartyCreateOrConnectWithoutMembersInput
    upsert?: PartyUpsertWithoutMembersInput
    connect?: PartyWhereUniqueInput
    update?: XOR<XOR<PartyUpdateToOneWithWhereWithoutMembersInput, PartyUpdateWithoutMembersInput>, PartyUncheckedUpdateWithoutMembersInput>
  }

  export type ProfileUpdateOneRequiredWithoutPartyMembershipsNestedInput = {
    create?: XOR<ProfileCreateWithoutPartyMembershipsInput, ProfileUncheckedCreateWithoutPartyMembershipsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutPartyMembershipsInput
    upsert?: ProfileUpsertWithoutPartyMembershipsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutPartyMembershipsInput, ProfileUpdateWithoutPartyMembershipsInput>, ProfileUncheckedUpdateWithoutPartyMembershipsInput>
  }

  export type PartyCreateNestedOneWithoutQueueCurrentInput = {
    create?: XOR<PartyCreateWithoutQueueCurrentInput, PartyUncheckedCreateWithoutQueueCurrentInput>
    connectOrCreate?: PartyCreateOrConnectWithoutQueueCurrentInput
    connect?: PartyWhereUniqueInput
  }

  export type PartyCreateNestedOneWithoutQueueHeadInput = {
    create?: XOR<PartyCreateWithoutQueueHeadInput, PartyUncheckedCreateWithoutQueueHeadInput>
    connectOrCreate?: PartyCreateOrConnectWithoutQueueHeadInput
    connect?: PartyWhereUniqueInput
  }

  export type PartyCreateNestedOneWithoutQueueTailInput = {
    create?: XOR<PartyCreateWithoutQueueTailInput, PartyUncheckedCreateWithoutQueueTailInput>
    connectOrCreate?: PartyCreateOrConnectWithoutQueueTailInput
    connect?: PartyWhereUniqueInput
  }

  export type QueueItemCreateNestedOneWithoutNextItemInput = {
    create?: XOR<QueueItemCreateWithoutNextItemInput, QueueItemUncheckedCreateWithoutNextItemInput>
    connectOrCreate?: QueueItemCreateOrConnectWithoutNextItemInput
    connect?: QueueItemWhereUniqueInput
  }

  export type QueueItemCreateNestedOneWithoutNextInput = {
    create?: XOR<QueueItemCreateWithoutNextInput, QueueItemUncheckedCreateWithoutNextInput>
    connectOrCreate?: QueueItemCreateOrConnectWithoutNextInput
    connect?: QueueItemWhereUniqueInput
  }

  export type PartyCreateNestedOneWithoutQueueInput = {
    create?: XOR<PartyCreateWithoutQueueInput, PartyUncheckedCreateWithoutQueueInput>
    connectOrCreate?: PartyCreateOrConnectWithoutQueueInput
    connect?: PartyWhereUniqueInput
  }

  export type QueueItemCreateNestedOneWithoutPrevItemInput = {
    create?: XOR<QueueItemCreateWithoutPrevItemInput, QueueItemUncheckedCreateWithoutPrevItemInput>
    connectOrCreate?: QueueItemCreateOrConnectWithoutPrevItemInput
    connect?: QueueItemWhereUniqueInput
  }

  export type QueueItemCreateNestedOneWithoutPrevInput = {
    create?: XOR<QueueItemCreateWithoutPrevInput, QueueItemUncheckedCreateWithoutPrevInput>
    connectOrCreate?: QueueItemCreateOrConnectWithoutPrevInput
    connect?: QueueItemWhereUniqueInput
  }

  export type PartyUncheckedCreateNestedOneWithoutQueueCurrentInput = {
    create?: XOR<PartyCreateWithoutQueueCurrentInput, PartyUncheckedCreateWithoutQueueCurrentInput>
    connectOrCreate?: PartyCreateOrConnectWithoutQueueCurrentInput
    connect?: PartyWhereUniqueInput
  }

  export type PartyUncheckedCreateNestedOneWithoutQueueHeadInput = {
    create?: XOR<PartyCreateWithoutQueueHeadInput, PartyUncheckedCreateWithoutQueueHeadInput>
    connectOrCreate?: PartyCreateOrConnectWithoutQueueHeadInput
    connect?: PartyWhereUniqueInput
  }

  export type PartyUncheckedCreateNestedOneWithoutQueueTailInput = {
    create?: XOR<PartyCreateWithoutQueueTailInput, PartyUncheckedCreateWithoutQueueTailInput>
    connectOrCreate?: PartyCreateOrConnectWithoutQueueTailInput
    connect?: PartyWhereUniqueInput
  }

  export type QueueItemUncheckedCreateNestedOneWithoutNextInput = {
    create?: XOR<QueueItemCreateWithoutNextInput, QueueItemUncheckedCreateWithoutNextInput>
    connectOrCreate?: QueueItemCreateOrConnectWithoutNextInput
    connect?: QueueItemWhereUniqueInput
  }

  export type QueueItemUncheckedCreateNestedOneWithoutPrevInput = {
    create?: XOR<QueueItemCreateWithoutPrevInput, QueueItemUncheckedCreateWithoutPrevInput>
    connectOrCreate?: QueueItemCreateOrConnectWithoutPrevInput
    connect?: QueueItemWhereUniqueInput
  }

  export type EnumItemStatusFieldUpdateOperationsInput = {
    set?: $Enums.ItemStatus
  }

  export type PartyUpdateOneWithoutQueueCurrentNestedInput = {
    create?: XOR<PartyCreateWithoutQueueCurrentInput, PartyUncheckedCreateWithoutQueueCurrentInput>
    connectOrCreate?: PartyCreateOrConnectWithoutQueueCurrentInput
    upsert?: PartyUpsertWithoutQueueCurrentInput
    disconnect?: PartyWhereInput | boolean
    delete?: PartyWhereInput | boolean
    connect?: PartyWhereUniqueInput
    update?: XOR<XOR<PartyUpdateToOneWithWhereWithoutQueueCurrentInput, PartyUpdateWithoutQueueCurrentInput>, PartyUncheckedUpdateWithoutQueueCurrentInput>
  }

  export type PartyUpdateOneWithoutQueueHeadNestedInput = {
    create?: XOR<PartyCreateWithoutQueueHeadInput, PartyUncheckedCreateWithoutQueueHeadInput>
    connectOrCreate?: PartyCreateOrConnectWithoutQueueHeadInput
    upsert?: PartyUpsertWithoutQueueHeadInput
    disconnect?: PartyWhereInput | boolean
    delete?: PartyWhereInput | boolean
    connect?: PartyWhereUniqueInput
    update?: XOR<XOR<PartyUpdateToOneWithWhereWithoutQueueHeadInput, PartyUpdateWithoutQueueHeadInput>, PartyUncheckedUpdateWithoutQueueHeadInput>
  }

  export type PartyUpdateOneWithoutQueueTailNestedInput = {
    create?: XOR<PartyCreateWithoutQueueTailInput, PartyUncheckedCreateWithoutQueueTailInput>
    connectOrCreate?: PartyCreateOrConnectWithoutQueueTailInput
    upsert?: PartyUpsertWithoutQueueTailInput
    disconnect?: PartyWhereInput | boolean
    delete?: PartyWhereInput | boolean
    connect?: PartyWhereUniqueInput
    update?: XOR<XOR<PartyUpdateToOneWithWhereWithoutQueueTailInput, PartyUpdateWithoutQueueTailInput>, PartyUncheckedUpdateWithoutQueueTailInput>
  }

  export type QueueItemUpdateOneWithoutNextItemNestedInput = {
    create?: XOR<QueueItemCreateWithoutNextItemInput, QueueItemUncheckedCreateWithoutNextItemInput>
    connectOrCreate?: QueueItemCreateOrConnectWithoutNextItemInput
    upsert?: QueueItemUpsertWithoutNextItemInput
    disconnect?: QueueItemWhereInput | boolean
    delete?: QueueItemWhereInput | boolean
    connect?: QueueItemWhereUniqueInput
    update?: XOR<XOR<QueueItemUpdateToOneWithWhereWithoutNextItemInput, QueueItemUpdateWithoutNextItemInput>, QueueItemUncheckedUpdateWithoutNextItemInput>
  }

  export type QueueItemUpdateOneWithoutNextNestedInput = {
    create?: XOR<QueueItemCreateWithoutNextInput, QueueItemUncheckedCreateWithoutNextInput>
    connectOrCreate?: QueueItemCreateOrConnectWithoutNextInput
    upsert?: QueueItemUpsertWithoutNextInput
    disconnect?: QueueItemWhereInput | boolean
    delete?: QueueItemWhereInput | boolean
    connect?: QueueItemWhereUniqueInput
    update?: XOR<XOR<QueueItemUpdateToOneWithWhereWithoutNextInput, QueueItemUpdateWithoutNextInput>, QueueItemUncheckedUpdateWithoutNextInput>
  }

  export type PartyUpdateOneRequiredWithoutQueueNestedInput = {
    create?: XOR<PartyCreateWithoutQueueInput, PartyUncheckedCreateWithoutQueueInput>
    connectOrCreate?: PartyCreateOrConnectWithoutQueueInput
    upsert?: PartyUpsertWithoutQueueInput
    connect?: PartyWhereUniqueInput
    update?: XOR<XOR<PartyUpdateToOneWithWhereWithoutQueueInput, PartyUpdateWithoutQueueInput>, PartyUncheckedUpdateWithoutQueueInput>
  }

  export type QueueItemUpdateOneWithoutPrevItemNestedInput = {
    create?: XOR<QueueItemCreateWithoutPrevItemInput, QueueItemUncheckedCreateWithoutPrevItemInput>
    connectOrCreate?: QueueItemCreateOrConnectWithoutPrevItemInput
    upsert?: QueueItemUpsertWithoutPrevItemInput
    disconnect?: QueueItemWhereInput | boolean
    delete?: QueueItemWhereInput | boolean
    connect?: QueueItemWhereUniqueInput
    update?: XOR<XOR<QueueItemUpdateToOneWithWhereWithoutPrevItemInput, QueueItemUpdateWithoutPrevItemInput>, QueueItemUncheckedUpdateWithoutPrevItemInput>
  }

  export type QueueItemUpdateOneWithoutPrevNestedInput = {
    create?: XOR<QueueItemCreateWithoutPrevInput, QueueItemUncheckedCreateWithoutPrevInput>
    connectOrCreate?: QueueItemCreateOrConnectWithoutPrevInput
    upsert?: QueueItemUpsertWithoutPrevInput
    disconnect?: QueueItemWhereInput | boolean
    delete?: QueueItemWhereInput | boolean
    connect?: QueueItemWhereUniqueInput
    update?: XOR<XOR<QueueItemUpdateToOneWithWhereWithoutPrevInput, QueueItemUpdateWithoutPrevInput>, QueueItemUncheckedUpdateWithoutPrevInput>
  }

  export type PartyUncheckedUpdateOneWithoutQueueCurrentNestedInput = {
    create?: XOR<PartyCreateWithoutQueueCurrentInput, PartyUncheckedCreateWithoutQueueCurrentInput>
    connectOrCreate?: PartyCreateOrConnectWithoutQueueCurrentInput
    upsert?: PartyUpsertWithoutQueueCurrentInput
    disconnect?: PartyWhereInput | boolean
    delete?: PartyWhereInput | boolean
    connect?: PartyWhereUniqueInput
    update?: XOR<XOR<PartyUpdateToOneWithWhereWithoutQueueCurrentInput, PartyUpdateWithoutQueueCurrentInput>, PartyUncheckedUpdateWithoutQueueCurrentInput>
  }

  export type PartyUncheckedUpdateOneWithoutQueueHeadNestedInput = {
    create?: XOR<PartyCreateWithoutQueueHeadInput, PartyUncheckedCreateWithoutQueueHeadInput>
    connectOrCreate?: PartyCreateOrConnectWithoutQueueHeadInput
    upsert?: PartyUpsertWithoutQueueHeadInput
    disconnect?: PartyWhereInput | boolean
    delete?: PartyWhereInput | boolean
    connect?: PartyWhereUniqueInput
    update?: XOR<XOR<PartyUpdateToOneWithWhereWithoutQueueHeadInput, PartyUpdateWithoutQueueHeadInput>, PartyUncheckedUpdateWithoutQueueHeadInput>
  }

  export type PartyUncheckedUpdateOneWithoutQueueTailNestedInput = {
    create?: XOR<PartyCreateWithoutQueueTailInput, PartyUncheckedCreateWithoutQueueTailInput>
    connectOrCreate?: PartyCreateOrConnectWithoutQueueTailInput
    upsert?: PartyUpsertWithoutQueueTailInput
    disconnect?: PartyWhereInput | boolean
    delete?: PartyWhereInput | boolean
    connect?: PartyWhereUniqueInput
    update?: XOR<XOR<PartyUpdateToOneWithWhereWithoutQueueTailInput, PartyUpdateWithoutQueueTailInput>, PartyUncheckedUpdateWithoutQueueTailInput>
  }

  export type QueueItemUncheckedUpdateOneWithoutNextNestedInput = {
    create?: XOR<QueueItemCreateWithoutNextInput, QueueItemUncheckedCreateWithoutNextInput>
    connectOrCreate?: QueueItemCreateOrConnectWithoutNextInput
    upsert?: QueueItemUpsertWithoutNextInput
    disconnect?: QueueItemWhereInput | boolean
    delete?: QueueItemWhereInput | boolean
    connect?: QueueItemWhereUniqueInput
    update?: XOR<XOR<QueueItemUpdateToOneWithWhereWithoutNextInput, QueueItemUpdateWithoutNextInput>, QueueItemUncheckedUpdateWithoutNextInput>
  }

  export type QueueItemUncheckedUpdateOneWithoutPrevNestedInput = {
    create?: XOR<QueueItemCreateWithoutPrevInput, QueueItemUncheckedCreateWithoutPrevInput>
    connectOrCreate?: QueueItemCreateOrConnectWithoutPrevInput
    upsert?: QueueItemUpsertWithoutPrevInput
    disconnect?: QueueItemWhereInput | boolean
    delete?: QueueItemWhereInput | boolean
    connect?: QueueItemWhereUniqueInput
    update?: XOR<XOR<QueueItemUpdateToOneWithWhereWithoutPrevInput, QueueItemUpdateWithoutPrevInput>, QueueItemUncheckedUpdateWithoutPrevInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPlaybackStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlaybackStatus | EnumPlaybackStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlaybackStatus[] | ListEnumPlaybackStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlaybackStatus[] | ListEnumPlaybackStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlaybackStatusFilter<$PrismaModel> | $Enums.PlaybackStatus
  }

  export type NestedEnumAutoplayTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AutoplayType | EnumAutoplayTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AutoplayType[] | ListEnumAutoplayTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AutoplayType[] | ListEnumAutoplayTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAutoplayTypeFilter<$PrismaModel> | $Enums.AutoplayType
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPlaybackStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlaybackStatus | EnumPlaybackStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlaybackStatus[] | ListEnumPlaybackStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlaybackStatus[] | ListEnumPlaybackStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlaybackStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlaybackStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlaybackStatusFilter<$PrismaModel>
    _max?: NestedEnumPlaybackStatusFilter<$PrismaModel>
  }

  export type NestedEnumAutoplayTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AutoplayType | EnumAutoplayTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AutoplayType[] | ListEnumAutoplayTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AutoplayType[] | ListEnumAutoplayTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAutoplayTypeWithAggregatesFilter<$PrismaModel> | $Enums.AutoplayType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAutoplayTypeFilter<$PrismaModel>
    _max?: NestedEnumAutoplayTypeFilter<$PrismaModel>
  }

  export type NestedEnumItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusFilter<$PrismaModel> | $Enums.ItemStatus
  }

  export type NestedEnumItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemStatusFilter<$PrismaModel>
    _max?: NestedEnumItemStatusFilter<$PrismaModel>
  }

  export type PartyMemberCreateWithoutUserInput = {
    id: string
    permissions?: PartyMemberCreatepermissionsInput | boolean[]
    party: PartyCreateNestedOneWithoutMembersInput
  }

  export type PartyMemberUncheckedCreateWithoutUserInput = {
    id: string
    permissions?: PartyMemberCreatepermissionsInput | boolean[]
    partyId: string
  }

  export type PartyMemberCreateOrConnectWithoutUserInput = {
    where: PartyMemberWhereUniqueInput
    create: XOR<PartyMemberCreateWithoutUserInput, PartyMemberUncheckedCreateWithoutUserInput>
  }

  export type PartyMemberUpsertWithoutUserInput = {
    update: XOR<PartyMemberUpdateWithoutUserInput, PartyMemberUncheckedUpdateWithoutUserInput>
    create: XOR<PartyMemberCreateWithoutUserInput, PartyMemberUncheckedCreateWithoutUserInput>
    where?: PartyMemberWhereInput
  }

  export type PartyMemberUpdateToOneWithWhereWithoutUserInput = {
    where?: PartyMemberWhereInput
    data: XOR<PartyMemberUpdateWithoutUserInput, PartyMemberUncheckedUpdateWithoutUserInput>
  }

  export type PartyMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissions?: PartyMemberUpdatepermissionsInput | boolean[]
    party?: PartyUpdateOneRequiredWithoutMembersNestedInput
  }

  export type PartyMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissions?: PartyMemberUpdatepermissionsInput | boolean[]
    partyId?: StringFieldUpdateOperationsInput | string
  }

  export type QueueItemCreateWithoutQueueCurrentInput = {
    id?: string
    status: $Enums.ItemStatus
    queueHead?: PartyCreateNestedOneWithoutQueueHeadInput
    queueTail?: PartyCreateNestedOneWithoutQueueTailInput
    next?: QueueItemCreateNestedOneWithoutNextItemInput
    nextItem?: QueueItemCreateNestedOneWithoutNextInput
    party: PartyCreateNestedOneWithoutQueueInput
    prev?: QueueItemCreateNestedOneWithoutPrevItemInput
    prevItem?: QueueItemCreateNestedOneWithoutPrevInput
  }

  export type QueueItemUncheckedCreateWithoutQueueCurrentInput = {
    id?: string
    status: $Enums.ItemStatus
    partyId: string
    prevId?: string | null
    nextId?: string | null
    queueHead?: PartyUncheckedCreateNestedOneWithoutQueueHeadInput
    queueTail?: PartyUncheckedCreateNestedOneWithoutQueueTailInput
    nextItem?: QueueItemUncheckedCreateNestedOneWithoutNextInput
    prevItem?: QueueItemUncheckedCreateNestedOneWithoutPrevInput
  }

  export type QueueItemCreateOrConnectWithoutQueueCurrentInput = {
    where: QueueItemWhereUniqueInput
    create: XOR<QueueItemCreateWithoutQueueCurrentInput, QueueItemUncheckedCreateWithoutQueueCurrentInput>
  }

  export type QueueItemCreateWithoutQueueHeadInput = {
    id?: string
    status: $Enums.ItemStatus
    queueCurrent?: PartyCreateNestedOneWithoutQueueCurrentInput
    queueTail?: PartyCreateNestedOneWithoutQueueTailInput
    next?: QueueItemCreateNestedOneWithoutNextItemInput
    nextItem?: QueueItemCreateNestedOneWithoutNextInput
    party: PartyCreateNestedOneWithoutQueueInput
    prev?: QueueItemCreateNestedOneWithoutPrevItemInput
    prevItem?: QueueItemCreateNestedOneWithoutPrevInput
  }

  export type QueueItemUncheckedCreateWithoutQueueHeadInput = {
    id?: string
    status: $Enums.ItemStatus
    partyId: string
    prevId?: string | null
    nextId?: string | null
    queueCurrent?: PartyUncheckedCreateNestedOneWithoutQueueCurrentInput
    queueTail?: PartyUncheckedCreateNestedOneWithoutQueueTailInput
    nextItem?: QueueItemUncheckedCreateNestedOneWithoutNextInput
    prevItem?: QueueItemUncheckedCreateNestedOneWithoutPrevInput
  }

  export type QueueItemCreateOrConnectWithoutQueueHeadInput = {
    where: QueueItemWhereUniqueInput
    create: XOR<QueueItemCreateWithoutQueueHeadInput, QueueItemUncheckedCreateWithoutQueueHeadInput>
  }

  export type QueueItemCreateWithoutQueueTailInput = {
    id?: string
    status: $Enums.ItemStatus
    queueCurrent?: PartyCreateNestedOneWithoutQueueCurrentInput
    queueHead?: PartyCreateNestedOneWithoutQueueHeadInput
    next?: QueueItemCreateNestedOneWithoutNextItemInput
    nextItem?: QueueItemCreateNestedOneWithoutNextInput
    party: PartyCreateNestedOneWithoutQueueInput
    prev?: QueueItemCreateNestedOneWithoutPrevItemInput
    prevItem?: QueueItemCreateNestedOneWithoutPrevInput
  }

  export type QueueItemUncheckedCreateWithoutQueueTailInput = {
    id?: string
    status: $Enums.ItemStatus
    partyId: string
    prevId?: string | null
    nextId?: string | null
    queueCurrent?: PartyUncheckedCreateNestedOneWithoutQueueCurrentInput
    queueHead?: PartyUncheckedCreateNestedOneWithoutQueueHeadInput
    nextItem?: QueueItemUncheckedCreateNestedOneWithoutNextInput
    prevItem?: QueueItemUncheckedCreateNestedOneWithoutPrevInput
  }

  export type QueueItemCreateOrConnectWithoutQueueTailInput = {
    where: QueueItemWhereUniqueInput
    create: XOR<QueueItemCreateWithoutQueueTailInput, QueueItemUncheckedCreateWithoutQueueTailInput>
  }

  export type PartyMemberCreateWithoutPartyInput = {
    id: string
    permissions?: PartyMemberCreatepermissionsInput | boolean[]
    user: ProfileCreateNestedOneWithoutPartyMembershipsInput
  }

  export type PartyMemberUncheckedCreateWithoutPartyInput = {
    id: string
    permissions?: PartyMemberCreatepermissionsInput | boolean[]
    userId: string
  }

  export type PartyMemberCreateOrConnectWithoutPartyInput = {
    where: PartyMemberWhereUniqueInput
    create: XOR<PartyMemberCreateWithoutPartyInput, PartyMemberUncheckedCreateWithoutPartyInput>
  }

  export type PartyMemberCreateManyPartyInputEnvelope = {
    data: PartyMemberCreateManyPartyInput | PartyMemberCreateManyPartyInput[]
    skipDuplicates?: boolean
  }

  export type QueueItemCreateWithoutPartyInput = {
    id?: string
    status: $Enums.ItemStatus
    queueCurrent?: PartyCreateNestedOneWithoutQueueCurrentInput
    queueHead?: PartyCreateNestedOneWithoutQueueHeadInput
    queueTail?: PartyCreateNestedOneWithoutQueueTailInput
    next?: QueueItemCreateNestedOneWithoutNextItemInput
    nextItem?: QueueItemCreateNestedOneWithoutNextInput
    prev?: QueueItemCreateNestedOneWithoutPrevItemInput
    prevItem?: QueueItemCreateNestedOneWithoutPrevInput
  }

  export type QueueItemUncheckedCreateWithoutPartyInput = {
    id?: string
    status: $Enums.ItemStatus
    prevId?: string | null
    nextId?: string | null
    queueCurrent?: PartyUncheckedCreateNestedOneWithoutQueueCurrentInput
    queueHead?: PartyUncheckedCreateNestedOneWithoutQueueHeadInput
    queueTail?: PartyUncheckedCreateNestedOneWithoutQueueTailInput
    nextItem?: QueueItemUncheckedCreateNestedOneWithoutNextInput
    prevItem?: QueueItemUncheckedCreateNestedOneWithoutPrevInput
  }

  export type QueueItemCreateOrConnectWithoutPartyInput = {
    where: QueueItemWhereUniqueInput
    create: XOR<QueueItemCreateWithoutPartyInput, QueueItemUncheckedCreateWithoutPartyInput>
  }

  export type QueueItemCreateManyPartyInputEnvelope = {
    data: QueueItemCreateManyPartyInput | QueueItemCreateManyPartyInput[]
    skipDuplicates?: boolean
  }

  export type QueueItemUpsertWithoutQueueCurrentInput = {
    update: XOR<QueueItemUpdateWithoutQueueCurrentInput, QueueItemUncheckedUpdateWithoutQueueCurrentInput>
    create: XOR<QueueItemCreateWithoutQueueCurrentInput, QueueItemUncheckedCreateWithoutQueueCurrentInput>
    where?: QueueItemWhereInput
  }

  export type QueueItemUpdateToOneWithWhereWithoutQueueCurrentInput = {
    where?: QueueItemWhereInput
    data: XOR<QueueItemUpdateWithoutQueueCurrentInput, QueueItemUncheckedUpdateWithoutQueueCurrentInput>
  }

  export type QueueItemUpdateWithoutQueueCurrentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    queueHead?: PartyUpdateOneWithoutQueueHeadNestedInput
    queueTail?: PartyUpdateOneWithoutQueueTailNestedInput
    next?: QueueItemUpdateOneWithoutNextItemNestedInput
    nextItem?: QueueItemUpdateOneWithoutNextNestedInput
    party?: PartyUpdateOneRequiredWithoutQueueNestedInput
    prev?: QueueItemUpdateOneWithoutPrevItemNestedInput
    prevItem?: QueueItemUpdateOneWithoutPrevNestedInput
  }

  export type QueueItemUncheckedUpdateWithoutQueueCurrentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    partyId?: StringFieldUpdateOperationsInput | string
    prevId?: NullableStringFieldUpdateOperationsInput | string | null
    nextId?: NullableStringFieldUpdateOperationsInput | string | null
    queueHead?: PartyUncheckedUpdateOneWithoutQueueHeadNestedInput
    queueTail?: PartyUncheckedUpdateOneWithoutQueueTailNestedInput
    nextItem?: QueueItemUncheckedUpdateOneWithoutNextNestedInput
    prevItem?: QueueItemUncheckedUpdateOneWithoutPrevNestedInput
  }

  export type QueueItemUpsertWithoutQueueHeadInput = {
    update: XOR<QueueItemUpdateWithoutQueueHeadInput, QueueItemUncheckedUpdateWithoutQueueHeadInput>
    create: XOR<QueueItemCreateWithoutQueueHeadInput, QueueItemUncheckedCreateWithoutQueueHeadInput>
    where?: QueueItemWhereInput
  }

  export type QueueItemUpdateToOneWithWhereWithoutQueueHeadInput = {
    where?: QueueItemWhereInput
    data: XOR<QueueItemUpdateWithoutQueueHeadInput, QueueItemUncheckedUpdateWithoutQueueHeadInput>
  }

  export type QueueItemUpdateWithoutQueueHeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    queueCurrent?: PartyUpdateOneWithoutQueueCurrentNestedInput
    queueTail?: PartyUpdateOneWithoutQueueTailNestedInput
    next?: QueueItemUpdateOneWithoutNextItemNestedInput
    nextItem?: QueueItemUpdateOneWithoutNextNestedInput
    party?: PartyUpdateOneRequiredWithoutQueueNestedInput
    prev?: QueueItemUpdateOneWithoutPrevItemNestedInput
    prevItem?: QueueItemUpdateOneWithoutPrevNestedInput
  }

  export type QueueItemUncheckedUpdateWithoutQueueHeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    partyId?: StringFieldUpdateOperationsInput | string
    prevId?: NullableStringFieldUpdateOperationsInput | string | null
    nextId?: NullableStringFieldUpdateOperationsInput | string | null
    queueCurrent?: PartyUncheckedUpdateOneWithoutQueueCurrentNestedInput
    queueTail?: PartyUncheckedUpdateOneWithoutQueueTailNestedInput
    nextItem?: QueueItemUncheckedUpdateOneWithoutNextNestedInput
    prevItem?: QueueItemUncheckedUpdateOneWithoutPrevNestedInput
  }

  export type QueueItemUpsertWithoutQueueTailInput = {
    update: XOR<QueueItemUpdateWithoutQueueTailInput, QueueItemUncheckedUpdateWithoutQueueTailInput>
    create: XOR<QueueItemCreateWithoutQueueTailInput, QueueItemUncheckedCreateWithoutQueueTailInput>
    where?: QueueItemWhereInput
  }

  export type QueueItemUpdateToOneWithWhereWithoutQueueTailInput = {
    where?: QueueItemWhereInput
    data: XOR<QueueItemUpdateWithoutQueueTailInput, QueueItemUncheckedUpdateWithoutQueueTailInput>
  }

  export type QueueItemUpdateWithoutQueueTailInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    queueCurrent?: PartyUpdateOneWithoutQueueCurrentNestedInput
    queueHead?: PartyUpdateOneWithoutQueueHeadNestedInput
    next?: QueueItemUpdateOneWithoutNextItemNestedInput
    nextItem?: QueueItemUpdateOneWithoutNextNestedInput
    party?: PartyUpdateOneRequiredWithoutQueueNestedInput
    prev?: QueueItemUpdateOneWithoutPrevItemNestedInput
    prevItem?: QueueItemUpdateOneWithoutPrevNestedInput
  }

  export type QueueItemUncheckedUpdateWithoutQueueTailInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    partyId?: StringFieldUpdateOperationsInput | string
    prevId?: NullableStringFieldUpdateOperationsInput | string | null
    nextId?: NullableStringFieldUpdateOperationsInput | string | null
    queueCurrent?: PartyUncheckedUpdateOneWithoutQueueCurrentNestedInput
    queueHead?: PartyUncheckedUpdateOneWithoutQueueHeadNestedInput
    nextItem?: QueueItemUncheckedUpdateOneWithoutNextNestedInput
    prevItem?: QueueItemUncheckedUpdateOneWithoutPrevNestedInput
  }

  export type PartyMemberUpsertWithWhereUniqueWithoutPartyInput = {
    where: PartyMemberWhereUniqueInput
    update: XOR<PartyMemberUpdateWithoutPartyInput, PartyMemberUncheckedUpdateWithoutPartyInput>
    create: XOR<PartyMemberCreateWithoutPartyInput, PartyMemberUncheckedCreateWithoutPartyInput>
  }

  export type PartyMemberUpdateWithWhereUniqueWithoutPartyInput = {
    where: PartyMemberWhereUniqueInput
    data: XOR<PartyMemberUpdateWithoutPartyInput, PartyMemberUncheckedUpdateWithoutPartyInput>
  }

  export type PartyMemberUpdateManyWithWhereWithoutPartyInput = {
    where: PartyMemberScalarWhereInput
    data: XOR<PartyMemberUpdateManyMutationInput, PartyMemberUncheckedUpdateManyWithoutPartyInput>
  }

  export type PartyMemberScalarWhereInput = {
    AND?: PartyMemberScalarWhereInput | PartyMemberScalarWhereInput[]
    OR?: PartyMemberScalarWhereInput[]
    NOT?: PartyMemberScalarWhereInput | PartyMemberScalarWhereInput[]
    id?: StringFilter<"PartyMember"> | string
    permissions?: BoolNullableListFilter<"PartyMember">
    userId?: StringFilter<"PartyMember"> | string
    partyId?: StringFilter<"PartyMember"> | string
  }

  export type QueueItemUpsertWithWhereUniqueWithoutPartyInput = {
    where: QueueItemWhereUniqueInput
    update: XOR<QueueItemUpdateWithoutPartyInput, QueueItemUncheckedUpdateWithoutPartyInput>
    create: XOR<QueueItemCreateWithoutPartyInput, QueueItemUncheckedCreateWithoutPartyInput>
  }

  export type QueueItemUpdateWithWhereUniqueWithoutPartyInput = {
    where: QueueItemWhereUniqueInput
    data: XOR<QueueItemUpdateWithoutPartyInput, QueueItemUncheckedUpdateWithoutPartyInput>
  }

  export type QueueItemUpdateManyWithWhereWithoutPartyInput = {
    where: QueueItemScalarWhereInput
    data: XOR<QueueItemUpdateManyMutationInput, QueueItemUncheckedUpdateManyWithoutPartyInput>
  }

  export type QueueItemScalarWhereInput = {
    AND?: QueueItemScalarWhereInput | QueueItemScalarWhereInput[]
    OR?: QueueItemScalarWhereInput[]
    NOT?: QueueItemScalarWhereInput | QueueItemScalarWhereInput[]
    id?: StringFilter<"QueueItem"> | string
    status?: EnumItemStatusFilter<"QueueItem"> | $Enums.ItemStatus
    partyId?: StringFilter<"QueueItem"> | string
    prevId?: StringNullableFilter<"QueueItem"> | string | null
    nextId?: StringNullableFilter<"QueueItem"> | string | null
  }

  export type PartyCreateWithoutMembersInput = {
    id: string
    name: string
    positionMS?: number
    startedAt?: Date | string | null
    status?: $Enums.PlaybackStatus
    autoplay?: $Enums.AutoplayType
    queueCurrent?: QueueItemCreateNestedOneWithoutQueueCurrentInput
    queueHead?: QueueItemCreateNestedOneWithoutQueueHeadInput
    queueTail?: QueueItemCreateNestedOneWithoutQueueTailInput
    queue?: QueueItemCreateNestedManyWithoutPartyInput
  }

  export type PartyUncheckedCreateWithoutMembersInput = {
    id: string
    name: string
    positionMS?: number
    startedAt?: Date | string | null
    status?: $Enums.PlaybackStatus
    autoplay?: $Enums.AutoplayType
    headId?: string | null
    tailId?: string | null
    currentId?: string | null
    queue?: QueueItemUncheckedCreateNestedManyWithoutPartyInput
  }

  export type PartyCreateOrConnectWithoutMembersInput = {
    where: PartyWhereUniqueInput
    create: XOR<PartyCreateWithoutMembersInput, PartyUncheckedCreateWithoutMembersInput>
  }

  export type ProfileCreateWithoutPartyMembershipsInput = {
    id: string
    name?: string | null
    email: string
    conntectedSpotify?: boolean
    nextConnectSpotify?: Date | string
  }

  export type ProfileUncheckedCreateWithoutPartyMembershipsInput = {
    id: string
    name?: string | null
    email: string
    conntectedSpotify?: boolean
    nextConnectSpotify?: Date | string
  }

  export type ProfileCreateOrConnectWithoutPartyMembershipsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutPartyMembershipsInput, ProfileUncheckedCreateWithoutPartyMembershipsInput>
  }

  export type PartyUpsertWithoutMembersInput = {
    update: XOR<PartyUpdateWithoutMembersInput, PartyUncheckedUpdateWithoutMembersInput>
    create: XOR<PartyCreateWithoutMembersInput, PartyUncheckedCreateWithoutMembersInput>
    where?: PartyWhereInput
  }

  export type PartyUpdateToOneWithWhereWithoutMembersInput = {
    where?: PartyWhereInput
    data: XOR<PartyUpdateWithoutMembersInput, PartyUncheckedUpdateWithoutMembersInput>
  }

  export type PartyUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    positionMS?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPlaybackStatusFieldUpdateOperationsInput | $Enums.PlaybackStatus
    autoplay?: EnumAutoplayTypeFieldUpdateOperationsInput | $Enums.AutoplayType
    queueCurrent?: QueueItemUpdateOneWithoutQueueCurrentNestedInput
    queueHead?: QueueItemUpdateOneWithoutQueueHeadNestedInput
    queueTail?: QueueItemUpdateOneWithoutQueueTailNestedInput
    queue?: QueueItemUpdateManyWithoutPartyNestedInput
  }

  export type PartyUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    positionMS?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPlaybackStatusFieldUpdateOperationsInput | $Enums.PlaybackStatus
    autoplay?: EnumAutoplayTypeFieldUpdateOperationsInput | $Enums.AutoplayType
    headId?: NullableStringFieldUpdateOperationsInput | string | null
    tailId?: NullableStringFieldUpdateOperationsInput | string | null
    currentId?: NullableStringFieldUpdateOperationsInput | string | null
    queue?: QueueItemUncheckedUpdateManyWithoutPartyNestedInput
  }

  export type ProfileUpsertWithoutPartyMembershipsInput = {
    update: XOR<ProfileUpdateWithoutPartyMembershipsInput, ProfileUncheckedUpdateWithoutPartyMembershipsInput>
    create: XOR<ProfileCreateWithoutPartyMembershipsInput, ProfileUncheckedCreateWithoutPartyMembershipsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutPartyMembershipsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutPartyMembershipsInput, ProfileUncheckedUpdateWithoutPartyMembershipsInput>
  }

  export type ProfileUpdateWithoutPartyMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    conntectedSpotify?: BoolFieldUpdateOperationsInput | boolean
    nextConnectSpotify?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateWithoutPartyMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    conntectedSpotify?: BoolFieldUpdateOperationsInput | boolean
    nextConnectSpotify?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyCreateWithoutQueueCurrentInput = {
    id: string
    name: string
    positionMS?: number
    startedAt?: Date | string | null
    status?: $Enums.PlaybackStatus
    autoplay?: $Enums.AutoplayType
    queueHead?: QueueItemCreateNestedOneWithoutQueueHeadInput
    queueTail?: QueueItemCreateNestedOneWithoutQueueTailInput
    members?: PartyMemberCreateNestedManyWithoutPartyInput
    queue?: QueueItemCreateNestedManyWithoutPartyInput
  }

  export type PartyUncheckedCreateWithoutQueueCurrentInput = {
    id: string
    name: string
    positionMS?: number
    startedAt?: Date | string | null
    status?: $Enums.PlaybackStatus
    autoplay?: $Enums.AutoplayType
    headId?: string | null
    tailId?: string | null
    members?: PartyMemberUncheckedCreateNestedManyWithoutPartyInput
    queue?: QueueItemUncheckedCreateNestedManyWithoutPartyInput
  }

  export type PartyCreateOrConnectWithoutQueueCurrentInput = {
    where: PartyWhereUniqueInput
    create: XOR<PartyCreateWithoutQueueCurrentInput, PartyUncheckedCreateWithoutQueueCurrentInput>
  }

  export type PartyCreateWithoutQueueHeadInput = {
    id: string
    name: string
    positionMS?: number
    startedAt?: Date | string | null
    status?: $Enums.PlaybackStatus
    autoplay?: $Enums.AutoplayType
    queueCurrent?: QueueItemCreateNestedOneWithoutQueueCurrentInput
    queueTail?: QueueItemCreateNestedOneWithoutQueueTailInput
    members?: PartyMemberCreateNestedManyWithoutPartyInput
    queue?: QueueItemCreateNestedManyWithoutPartyInput
  }

  export type PartyUncheckedCreateWithoutQueueHeadInput = {
    id: string
    name: string
    positionMS?: number
    startedAt?: Date | string | null
    status?: $Enums.PlaybackStatus
    autoplay?: $Enums.AutoplayType
    tailId?: string | null
    currentId?: string | null
    members?: PartyMemberUncheckedCreateNestedManyWithoutPartyInput
    queue?: QueueItemUncheckedCreateNestedManyWithoutPartyInput
  }

  export type PartyCreateOrConnectWithoutQueueHeadInput = {
    where: PartyWhereUniqueInput
    create: XOR<PartyCreateWithoutQueueHeadInput, PartyUncheckedCreateWithoutQueueHeadInput>
  }

  export type PartyCreateWithoutQueueTailInput = {
    id: string
    name: string
    positionMS?: number
    startedAt?: Date | string | null
    status?: $Enums.PlaybackStatus
    autoplay?: $Enums.AutoplayType
    queueCurrent?: QueueItemCreateNestedOneWithoutQueueCurrentInput
    queueHead?: QueueItemCreateNestedOneWithoutQueueHeadInput
    members?: PartyMemberCreateNestedManyWithoutPartyInput
    queue?: QueueItemCreateNestedManyWithoutPartyInput
  }

  export type PartyUncheckedCreateWithoutQueueTailInput = {
    id: string
    name: string
    positionMS?: number
    startedAt?: Date | string | null
    status?: $Enums.PlaybackStatus
    autoplay?: $Enums.AutoplayType
    headId?: string | null
    currentId?: string | null
    members?: PartyMemberUncheckedCreateNestedManyWithoutPartyInput
    queue?: QueueItemUncheckedCreateNestedManyWithoutPartyInput
  }

  export type PartyCreateOrConnectWithoutQueueTailInput = {
    where: PartyWhereUniqueInput
    create: XOR<PartyCreateWithoutQueueTailInput, PartyUncheckedCreateWithoutQueueTailInput>
  }

  export type QueueItemCreateWithoutNextItemInput = {
    id?: string
    status: $Enums.ItemStatus
    queueCurrent?: PartyCreateNestedOneWithoutQueueCurrentInput
    queueHead?: PartyCreateNestedOneWithoutQueueHeadInput
    queueTail?: PartyCreateNestedOneWithoutQueueTailInput
    next?: QueueItemCreateNestedOneWithoutNextItemInput
    party: PartyCreateNestedOneWithoutQueueInput
    prev?: QueueItemCreateNestedOneWithoutPrevItemInput
    prevItem?: QueueItemCreateNestedOneWithoutPrevInput
  }

  export type QueueItemUncheckedCreateWithoutNextItemInput = {
    id?: string
    status: $Enums.ItemStatus
    partyId: string
    prevId?: string | null
    nextId?: string | null
    queueCurrent?: PartyUncheckedCreateNestedOneWithoutQueueCurrentInput
    queueHead?: PartyUncheckedCreateNestedOneWithoutQueueHeadInput
    queueTail?: PartyUncheckedCreateNestedOneWithoutQueueTailInput
    prevItem?: QueueItemUncheckedCreateNestedOneWithoutPrevInput
  }

  export type QueueItemCreateOrConnectWithoutNextItemInput = {
    where: QueueItemWhereUniqueInput
    create: XOR<QueueItemCreateWithoutNextItemInput, QueueItemUncheckedCreateWithoutNextItemInput>
  }

  export type QueueItemCreateWithoutNextInput = {
    id?: string
    status: $Enums.ItemStatus
    queueCurrent?: PartyCreateNestedOneWithoutQueueCurrentInput
    queueHead?: PartyCreateNestedOneWithoutQueueHeadInput
    queueTail?: PartyCreateNestedOneWithoutQueueTailInput
    nextItem?: QueueItemCreateNestedOneWithoutNextInput
    party: PartyCreateNestedOneWithoutQueueInput
    prev?: QueueItemCreateNestedOneWithoutPrevItemInput
    prevItem?: QueueItemCreateNestedOneWithoutPrevInput
  }

  export type QueueItemUncheckedCreateWithoutNextInput = {
    id?: string
    status: $Enums.ItemStatus
    partyId: string
    prevId?: string | null
    queueCurrent?: PartyUncheckedCreateNestedOneWithoutQueueCurrentInput
    queueHead?: PartyUncheckedCreateNestedOneWithoutQueueHeadInput
    queueTail?: PartyUncheckedCreateNestedOneWithoutQueueTailInput
    nextItem?: QueueItemUncheckedCreateNestedOneWithoutNextInput
    prevItem?: QueueItemUncheckedCreateNestedOneWithoutPrevInput
  }

  export type QueueItemCreateOrConnectWithoutNextInput = {
    where: QueueItemWhereUniqueInput
    create: XOR<QueueItemCreateWithoutNextInput, QueueItemUncheckedCreateWithoutNextInput>
  }

  export type PartyCreateWithoutQueueInput = {
    id: string
    name: string
    positionMS?: number
    startedAt?: Date | string | null
    status?: $Enums.PlaybackStatus
    autoplay?: $Enums.AutoplayType
    queueCurrent?: QueueItemCreateNestedOneWithoutQueueCurrentInput
    queueHead?: QueueItemCreateNestedOneWithoutQueueHeadInput
    queueTail?: QueueItemCreateNestedOneWithoutQueueTailInput
    members?: PartyMemberCreateNestedManyWithoutPartyInput
  }

  export type PartyUncheckedCreateWithoutQueueInput = {
    id: string
    name: string
    positionMS?: number
    startedAt?: Date | string | null
    status?: $Enums.PlaybackStatus
    autoplay?: $Enums.AutoplayType
    headId?: string | null
    tailId?: string | null
    currentId?: string | null
    members?: PartyMemberUncheckedCreateNestedManyWithoutPartyInput
  }

  export type PartyCreateOrConnectWithoutQueueInput = {
    where: PartyWhereUniqueInput
    create: XOR<PartyCreateWithoutQueueInput, PartyUncheckedCreateWithoutQueueInput>
  }

  export type QueueItemCreateWithoutPrevItemInput = {
    id?: string
    status: $Enums.ItemStatus
    queueCurrent?: PartyCreateNestedOneWithoutQueueCurrentInput
    queueHead?: PartyCreateNestedOneWithoutQueueHeadInput
    queueTail?: PartyCreateNestedOneWithoutQueueTailInput
    next?: QueueItemCreateNestedOneWithoutNextItemInput
    nextItem?: QueueItemCreateNestedOneWithoutNextInput
    party: PartyCreateNestedOneWithoutQueueInput
    prev?: QueueItemCreateNestedOneWithoutPrevItemInput
  }

  export type QueueItemUncheckedCreateWithoutPrevItemInput = {
    id?: string
    status: $Enums.ItemStatus
    partyId: string
    prevId?: string | null
    nextId?: string | null
    queueCurrent?: PartyUncheckedCreateNestedOneWithoutQueueCurrentInput
    queueHead?: PartyUncheckedCreateNestedOneWithoutQueueHeadInput
    queueTail?: PartyUncheckedCreateNestedOneWithoutQueueTailInput
    nextItem?: QueueItemUncheckedCreateNestedOneWithoutNextInput
  }

  export type QueueItemCreateOrConnectWithoutPrevItemInput = {
    where: QueueItemWhereUniqueInput
    create: XOR<QueueItemCreateWithoutPrevItemInput, QueueItemUncheckedCreateWithoutPrevItemInput>
  }

  export type QueueItemCreateWithoutPrevInput = {
    id?: string
    status: $Enums.ItemStatus
    queueCurrent?: PartyCreateNestedOneWithoutQueueCurrentInput
    queueHead?: PartyCreateNestedOneWithoutQueueHeadInput
    queueTail?: PartyCreateNestedOneWithoutQueueTailInput
    next?: QueueItemCreateNestedOneWithoutNextItemInput
    nextItem?: QueueItemCreateNestedOneWithoutNextInput
    party: PartyCreateNestedOneWithoutQueueInput
    prevItem?: QueueItemCreateNestedOneWithoutPrevInput
  }

  export type QueueItemUncheckedCreateWithoutPrevInput = {
    id?: string
    status: $Enums.ItemStatus
    partyId: string
    nextId?: string | null
    queueCurrent?: PartyUncheckedCreateNestedOneWithoutQueueCurrentInput
    queueHead?: PartyUncheckedCreateNestedOneWithoutQueueHeadInput
    queueTail?: PartyUncheckedCreateNestedOneWithoutQueueTailInput
    nextItem?: QueueItemUncheckedCreateNestedOneWithoutNextInput
    prevItem?: QueueItemUncheckedCreateNestedOneWithoutPrevInput
  }

  export type QueueItemCreateOrConnectWithoutPrevInput = {
    where: QueueItemWhereUniqueInput
    create: XOR<QueueItemCreateWithoutPrevInput, QueueItemUncheckedCreateWithoutPrevInput>
  }

  export type PartyUpsertWithoutQueueCurrentInput = {
    update: XOR<PartyUpdateWithoutQueueCurrentInput, PartyUncheckedUpdateWithoutQueueCurrentInput>
    create: XOR<PartyCreateWithoutQueueCurrentInput, PartyUncheckedCreateWithoutQueueCurrentInput>
    where?: PartyWhereInput
  }

  export type PartyUpdateToOneWithWhereWithoutQueueCurrentInput = {
    where?: PartyWhereInput
    data: XOR<PartyUpdateWithoutQueueCurrentInput, PartyUncheckedUpdateWithoutQueueCurrentInput>
  }

  export type PartyUpdateWithoutQueueCurrentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    positionMS?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPlaybackStatusFieldUpdateOperationsInput | $Enums.PlaybackStatus
    autoplay?: EnumAutoplayTypeFieldUpdateOperationsInput | $Enums.AutoplayType
    queueHead?: QueueItemUpdateOneWithoutQueueHeadNestedInput
    queueTail?: QueueItemUpdateOneWithoutQueueTailNestedInput
    members?: PartyMemberUpdateManyWithoutPartyNestedInput
    queue?: QueueItemUpdateManyWithoutPartyNestedInput
  }

  export type PartyUncheckedUpdateWithoutQueueCurrentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    positionMS?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPlaybackStatusFieldUpdateOperationsInput | $Enums.PlaybackStatus
    autoplay?: EnumAutoplayTypeFieldUpdateOperationsInput | $Enums.AutoplayType
    headId?: NullableStringFieldUpdateOperationsInput | string | null
    tailId?: NullableStringFieldUpdateOperationsInput | string | null
    members?: PartyMemberUncheckedUpdateManyWithoutPartyNestedInput
    queue?: QueueItemUncheckedUpdateManyWithoutPartyNestedInput
  }

  export type PartyUpsertWithoutQueueHeadInput = {
    update: XOR<PartyUpdateWithoutQueueHeadInput, PartyUncheckedUpdateWithoutQueueHeadInput>
    create: XOR<PartyCreateWithoutQueueHeadInput, PartyUncheckedCreateWithoutQueueHeadInput>
    where?: PartyWhereInput
  }

  export type PartyUpdateToOneWithWhereWithoutQueueHeadInput = {
    where?: PartyWhereInput
    data: XOR<PartyUpdateWithoutQueueHeadInput, PartyUncheckedUpdateWithoutQueueHeadInput>
  }

  export type PartyUpdateWithoutQueueHeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    positionMS?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPlaybackStatusFieldUpdateOperationsInput | $Enums.PlaybackStatus
    autoplay?: EnumAutoplayTypeFieldUpdateOperationsInput | $Enums.AutoplayType
    queueCurrent?: QueueItemUpdateOneWithoutQueueCurrentNestedInput
    queueTail?: QueueItemUpdateOneWithoutQueueTailNestedInput
    members?: PartyMemberUpdateManyWithoutPartyNestedInput
    queue?: QueueItemUpdateManyWithoutPartyNestedInput
  }

  export type PartyUncheckedUpdateWithoutQueueHeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    positionMS?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPlaybackStatusFieldUpdateOperationsInput | $Enums.PlaybackStatus
    autoplay?: EnumAutoplayTypeFieldUpdateOperationsInput | $Enums.AutoplayType
    tailId?: NullableStringFieldUpdateOperationsInput | string | null
    currentId?: NullableStringFieldUpdateOperationsInput | string | null
    members?: PartyMemberUncheckedUpdateManyWithoutPartyNestedInput
    queue?: QueueItemUncheckedUpdateManyWithoutPartyNestedInput
  }

  export type PartyUpsertWithoutQueueTailInput = {
    update: XOR<PartyUpdateWithoutQueueTailInput, PartyUncheckedUpdateWithoutQueueTailInput>
    create: XOR<PartyCreateWithoutQueueTailInput, PartyUncheckedCreateWithoutQueueTailInput>
    where?: PartyWhereInput
  }

  export type PartyUpdateToOneWithWhereWithoutQueueTailInput = {
    where?: PartyWhereInput
    data: XOR<PartyUpdateWithoutQueueTailInput, PartyUncheckedUpdateWithoutQueueTailInput>
  }

  export type PartyUpdateWithoutQueueTailInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    positionMS?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPlaybackStatusFieldUpdateOperationsInput | $Enums.PlaybackStatus
    autoplay?: EnumAutoplayTypeFieldUpdateOperationsInput | $Enums.AutoplayType
    queueCurrent?: QueueItemUpdateOneWithoutQueueCurrentNestedInput
    queueHead?: QueueItemUpdateOneWithoutQueueHeadNestedInput
    members?: PartyMemberUpdateManyWithoutPartyNestedInput
    queue?: QueueItemUpdateManyWithoutPartyNestedInput
  }

  export type PartyUncheckedUpdateWithoutQueueTailInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    positionMS?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPlaybackStatusFieldUpdateOperationsInput | $Enums.PlaybackStatus
    autoplay?: EnumAutoplayTypeFieldUpdateOperationsInput | $Enums.AutoplayType
    headId?: NullableStringFieldUpdateOperationsInput | string | null
    currentId?: NullableStringFieldUpdateOperationsInput | string | null
    members?: PartyMemberUncheckedUpdateManyWithoutPartyNestedInput
    queue?: QueueItemUncheckedUpdateManyWithoutPartyNestedInput
  }

  export type QueueItemUpsertWithoutNextItemInput = {
    update: XOR<QueueItemUpdateWithoutNextItemInput, QueueItemUncheckedUpdateWithoutNextItemInput>
    create: XOR<QueueItemCreateWithoutNextItemInput, QueueItemUncheckedCreateWithoutNextItemInput>
    where?: QueueItemWhereInput
  }

  export type QueueItemUpdateToOneWithWhereWithoutNextItemInput = {
    where?: QueueItemWhereInput
    data: XOR<QueueItemUpdateWithoutNextItemInput, QueueItemUncheckedUpdateWithoutNextItemInput>
  }

  export type QueueItemUpdateWithoutNextItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    queueCurrent?: PartyUpdateOneWithoutQueueCurrentNestedInput
    queueHead?: PartyUpdateOneWithoutQueueHeadNestedInput
    queueTail?: PartyUpdateOneWithoutQueueTailNestedInput
    next?: QueueItemUpdateOneWithoutNextItemNestedInput
    party?: PartyUpdateOneRequiredWithoutQueueNestedInput
    prev?: QueueItemUpdateOneWithoutPrevItemNestedInput
    prevItem?: QueueItemUpdateOneWithoutPrevNestedInput
  }

  export type QueueItemUncheckedUpdateWithoutNextItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    partyId?: StringFieldUpdateOperationsInput | string
    prevId?: NullableStringFieldUpdateOperationsInput | string | null
    nextId?: NullableStringFieldUpdateOperationsInput | string | null
    queueCurrent?: PartyUncheckedUpdateOneWithoutQueueCurrentNestedInput
    queueHead?: PartyUncheckedUpdateOneWithoutQueueHeadNestedInput
    queueTail?: PartyUncheckedUpdateOneWithoutQueueTailNestedInput
    prevItem?: QueueItemUncheckedUpdateOneWithoutPrevNestedInput
  }

  export type QueueItemUpsertWithoutNextInput = {
    update: XOR<QueueItemUpdateWithoutNextInput, QueueItemUncheckedUpdateWithoutNextInput>
    create: XOR<QueueItemCreateWithoutNextInput, QueueItemUncheckedCreateWithoutNextInput>
    where?: QueueItemWhereInput
  }

  export type QueueItemUpdateToOneWithWhereWithoutNextInput = {
    where?: QueueItemWhereInput
    data: XOR<QueueItemUpdateWithoutNextInput, QueueItemUncheckedUpdateWithoutNextInput>
  }

  export type QueueItemUpdateWithoutNextInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    queueCurrent?: PartyUpdateOneWithoutQueueCurrentNestedInput
    queueHead?: PartyUpdateOneWithoutQueueHeadNestedInput
    queueTail?: PartyUpdateOneWithoutQueueTailNestedInput
    nextItem?: QueueItemUpdateOneWithoutNextNestedInput
    party?: PartyUpdateOneRequiredWithoutQueueNestedInput
    prev?: QueueItemUpdateOneWithoutPrevItemNestedInput
    prevItem?: QueueItemUpdateOneWithoutPrevNestedInput
  }

  export type QueueItemUncheckedUpdateWithoutNextInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    partyId?: StringFieldUpdateOperationsInput | string
    prevId?: NullableStringFieldUpdateOperationsInput | string | null
    queueCurrent?: PartyUncheckedUpdateOneWithoutQueueCurrentNestedInput
    queueHead?: PartyUncheckedUpdateOneWithoutQueueHeadNestedInput
    queueTail?: PartyUncheckedUpdateOneWithoutQueueTailNestedInput
    nextItem?: QueueItemUncheckedUpdateOneWithoutNextNestedInput
    prevItem?: QueueItemUncheckedUpdateOneWithoutPrevNestedInput
  }

  export type PartyUpsertWithoutQueueInput = {
    update: XOR<PartyUpdateWithoutQueueInput, PartyUncheckedUpdateWithoutQueueInput>
    create: XOR<PartyCreateWithoutQueueInput, PartyUncheckedCreateWithoutQueueInput>
    where?: PartyWhereInput
  }

  export type PartyUpdateToOneWithWhereWithoutQueueInput = {
    where?: PartyWhereInput
    data: XOR<PartyUpdateWithoutQueueInput, PartyUncheckedUpdateWithoutQueueInput>
  }

  export type PartyUpdateWithoutQueueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    positionMS?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPlaybackStatusFieldUpdateOperationsInput | $Enums.PlaybackStatus
    autoplay?: EnumAutoplayTypeFieldUpdateOperationsInput | $Enums.AutoplayType
    queueCurrent?: QueueItemUpdateOneWithoutQueueCurrentNestedInput
    queueHead?: QueueItemUpdateOneWithoutQueueHeadNestedInput
    queueTail?: QueueItemUpdateOneWithoutQueueTailNestedInput
    members?: PartyMemberUpdateManyWithoutPartyNestedInput
  }

  export type PartyUncheckedUpdateWithoutQueueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    positionMS?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPlaybackStatusFieldUpdateOperationsInput | $Enums.PlaybackStatus
    autoplay?: EnumAutoplayTypeFieldUpdateOperationsInput | $Enums.AutoplayType
    headId?: NullableStringFieldUpdateOperationsInput | string | null
    tailId?: NullableStringFieldUpdateOperationsInput | string | null
    currentId?: NullableStringFieldUpdateOperationsInput | string | null
    members?: PartyMemberUncheckedUpdateManyWithoutPartyNestedInput
  }

  export type QueueItemUpsertWithoutPrevItemInput = {
    update: XOR<QueueItemUpdateWithoutPrevItemInput, QueueItemUncheckedUpdateWithoutPrevItemInput>
    create: XOR<QueueItemCreateWithoutPrevItemInput, QueueItemUncheckedCreateWithoutPrevItemInput>
    where?: QueueItemWhereInput
  }

  export type QueueItemUpdateToOneWithWhereWithoutPrevItemInput = {
    where?: QueueItemWhereInput
    data: XOR<QueueItemUpdateWithoutPrevItemInput, QueueItemUncheckedUpdateWithoutPrevItemInput>
  }

  export type QueueItemUpdateWithoutPrevItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    queueCurrent?: PartyUpdateOneWithoutQueueCurrentNestedInput
    queueHead?: PartyUpdateOneWithoutQueueHeadNestedInput
    queueTail?: PartyUpdateOneWithoutQueueTailNestedInput
    next?: QueueItemUpdateOneWithoutNextItemNestedInput
    nextItem?: QueueItemUpdateOneWithoutNextNestedInput
    party?: PartyUpdateOneRequiredWithoutQueueNestedInput
    prev?: QueueItemUpdateOneWithoutPrevItemNestedInput
  }

  export type QueueItemUncheckedUpdateWithoutPrevItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    partyId?: StringFieldUpdateOperationsInput | string
    prevId?: NullableStringFieldUpdateOperationsInput | string | null
    nextId?: NullableStringFieldUpdateOperationsInput | string | null
    queueCurrent?: PartyUncheckedUpdateOneWithoutQueueCurrentNestedInput
    queueHead?: PartyUncheckedUpdateOneWithoutQueueHeadNestedInput
    queueTail?: PartyUncheckedUpdateOneWithoutQueueTailNestedInput
    nextItem?: QueueItemUncheckedUpdateOneWithoutNextNestedInput
  }

  export type QueueItemUpsertWithoutPrevInput = {
    update: XOR<QueueItemUpdateWithoutPrevInput, QueueItemUncheckedUpdateWithoutPrevInput>
    create: XOR<QueueItemCreateWithoutPrevInput, QueueItemUncheckedCreateWithoutPrevInput>
    where?: QueueItemWhereInput
  }

  export type QueueItemUpdateToOneWithWhereWithoutPrevInput = {
    where?: QueueItemWhereInput
    data: XOR<QueueItemUpdateWithoutPrevInput, QueueItemUncheckedUpdateWithoutPrevInput>
  }

  export type QueueItemUpdateWithoutPrevInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    queueCurrent?: PartyUpdateOneWithoutQueueCurrentNestedInput
    queueHead?: PartyUpdateOneWithoutQueueHeadNestedInput
    queueTail?: PartyUpdateOneWithoutQueueTailNestedInput
    next?: QueueItemUpdateOneWithoutNextItemNestedInput
    nextItem?: QueueItemUpdateOneWithoutNextNestedInput
    party?: PartyUpdateOneRequiredWithoutQueueNestedInput
    prevItem?: QueueItemUpdateOneWithoutPrevNestedInput
  }

  export type QueueItemUncheckedUpdateWithoutPrevInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    partyId?: StringFieldUpdateOperationsInput | string
    nextId?: NullableStringFieldUpdateOperationsInput | string | null
    queueCurrent?: PartyUncheckedUpdateOneWithoutQueueCurrentNestedInput
    queueHead?: PartyUncheckedUpdateOneWithoutQueueHeadNestedInput
    queueTail?: PartyUncheckedUpdateOneWithoutQueueTailNestedInput
    nextItem?: QueueItemUncheckedUpdateOneWithoutNextNestedInput
    prevItem?: QueueItemUncheckedUpdateOneWithoutPrevNestedInput
  }

  export type PartyMemberCreateManyPartyInput = {
    id: string
    permissions?: PartyMemberCreatepermissionsInput | boolean[]
    userId: string
  }

  export type QueueItemCreateManyPartyInput = {
    id?: string
    status: $Enums.ItemStatus
    prevId?: string | null
    nextId?: string | null
  }

  export type PartyMemberUpdateWithoutPartyInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissions?: PartyMemberUpdatepermissionsInput | boolean[]
    user?: ProfileUpdateOneRequiredWithoutPartyMembershipsNestedInput
  }

  export type PartyMemberUncheckedUpdateWithoutPartyInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissions?: PartyMemberUpdatepermissionsInput | boolean[]
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PartyMemberUncheckedUpdateManyWithoutPartyInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissions?: PartyMemberUpdatepermissionsInput | boolean[]
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type QueueItemUpdateWithoutPartyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    queueCurrent?: PartyUpdateOneWithoutQueueCurrentNestedInput
    queueHead?: PartyUpdateOneWithoutQueueHeadNestedInput
    queueTail?: PartyUpdateOneWithoutQueueTailNestedInput
    next?: QueueItemUpdateOneWithoutNextItemNestedInput
    nextItem?: QueueItemUpdateOneWithoutNextNestedInput
    prev?: QueueItemUpdateOneWithoutPrevItemNestedInput
    prevItem?: QueueItemUpdateOneWithoutPrevNestedInput
  }

  export type QueueItemUncheckedUpdateWithoutPartyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    prevId?: NullableStringFieldUpdateOperationsInput | string | null
    nextId?: NullableStringFieldUpdateOperationsInput | string | null
    queueCurrent?: PartyUncheckedUpdateOneWithoutQueueCurrentNestedInput
    queueHead?: PartyUncheckedUpdateOneWithoutQueueHeadNestedInput
    queueTail?: PartyUncheckedUpdateOneWithoutQueueTailNestedInput
    nextItem?: QueueItemUncheckedUpdateOneWithoutNextNestedInput
    prevItem?: QueueItemUncheckedUpdateOneWithoutPrevNestedInput
  }

  export type QueueItemUncheckedUpdateManyWithoutPartyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    prevId?: NullableStringFieldUpdateOperationsInput | string | null
    nextId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}