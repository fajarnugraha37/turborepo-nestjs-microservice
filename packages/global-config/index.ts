import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = 'config.yaml';

function loadConfig (): Record<string, any> {
  return yaml.load(
    readFileSync(join(__dirname, '..', '..', YAML_CONFIG_FILENAME), 'utf8'),
  ) as Record<string, any>;
};

const config: Record<string, any> = loadConfig();

export  {
    loadConfig,
    config,
};