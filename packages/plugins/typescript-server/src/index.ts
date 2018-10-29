import { TypeScriptCommonConfig, initCommonTemplate } from 'graphql-codegen-typescript-common';
import { PluginFunction, DocumentFile, schemaToTemplateContext } from 'graphql-codegen-core';
import { GraphQLSchema } from 'graphql';
import * as Handlebars from 'handlebars';
import * as rootTemplate from './root.handlebars';

export interface TypeScriptServerConfig extends TypeScriptCommonConfig {
  schemaNamespace?: string;
}

export const plugin: PluginFunction<TypeScriptServerConfig> = async (
  schema: GraphQLSchema,
  documents: DocumentFile[],
  config: TypeScriptServerConfig
): Promise<string> => {
  const context = initCommonTemplate(Handlebars, schema, config);

  return Handlebars.compile(rootTemplate)(context);
};
