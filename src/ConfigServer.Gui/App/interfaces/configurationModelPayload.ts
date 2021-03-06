import { IConfigurationPropertyPayload } from "./configurationPropertyPayload";
import { IDictionary } from "./dictionary";

export interface IConfigurationModelPayload {
    name: string;
    description: string;
    isOption: boolean;
    property: IDictionary<IConfigurationPropertyPayload>;
}
