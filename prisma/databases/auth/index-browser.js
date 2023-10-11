
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.1.1
 * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
 */
Prisma.prismaVersion = {
  client: "5.1.1",
  engine: "ac9d7041ed77bcc8a8dbd2ab6616b39013829574"
}


const runtimeDescription = (() => {
  // https://edge-runtime.vercel.app/features/available-apis#addressing-the-runtime
  if ("EdgeRuntime" in globalThis && typeof globalThis.EdgeRuntime === "string") {
    return "under the Vercel Edge Runtime";
  }
  // Deno
  if ("Deno" in globalThis && typeof globalThis.Deno === "object") {
    return "under the Deno runtime";
  }
  // Default to assuming browser
  return "in the browser";
})();


Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AcoesScalarFieldEnum = {
  id: 'id',
  descricao: 'descricao',
  descricao_titulo: 'descricao_titulo',
  tabela: 'tabela',
  tabela_titulo: 'tabela_titulo',
  valor_padrao: 'valor_padrao'
};

exports.Prisma.Acoes_x_gruposScalarFieldEnum = {
  id: 'id',
  id_acao: 'id_acao',
  id_grupo_usuario: 'id_grupo_usuario',
  permite: 'permite'
};

exports.Prisma.EmpresasScalarFieldEnum = {
  id: 'id',
  cnpj: 'cnpj',
  xRazaoSocial: 'xRazaoSocial',
  xFant: 'xFant',
  xLgr: 'xLgr',
  nro: 'nro',
  xCpl: 'xCpl',
  xBairro: 'xBairro',
  cMun: 'cMun',
  xMun: 'xMun',
  uf: 'uf',
  cep: 'cep',
  fone: 'fone',
  ie: 'ie',
  crt: 'crt',
  token: 'token',
  banco: 'banco',
  status: 'status',
  email: 'email'
};

exports.Prisma.Grupos_usuariosScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  id_empresa: 'id_empresa',
  pagina_inicial: 'pagina_inicial'
};

exports.Prisma.UsuariosScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  ultimo_nome: 'ultimo_nome',
  email: 'email',
  senha: 'senha',
  celular: 'celular',
  status: 'status',
  user_token: 'user_token',
  exclusivo: 'exclusivo'
};

exports.Prisma.Usuarios_x_empresasScalarFieldEnum = {
  id: 'id',
  id_empresa: 'id_empresa',
  id_usuario: 'id_usuario',
  id_grupo_usuario: 'id_grupo_usuario'
};

exports.Prisma.ParametrosScalarFieldEnum = {
  id: 'id',
  parametro: 'parametro',
  valorParametro: 'valorParametro',
  descricao: 'descricao'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  acoes: 'acoes',
  acoes_x_grupos: 'acoes_x_grupos',
  empresas: 'empresas',
  grupos_usuarios: 'grupos_usuarios',
  usuarios: 'usuarios',
  usuarios_x_empresas: 'usuarios_x_empresas',
  parametros: 'parametros'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
