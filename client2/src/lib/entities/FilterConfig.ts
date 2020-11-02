// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IFilterConfig {
    enabled?: boolean;
    interval?: number;
}

export default class FilterConfig {
    readonly _enabled: boolean | undefined;

    get enabled(): boolean | undefined {
        return this._enabled;
    }

    readonly _interval: number | undefined;

    get interval(): number | undefined {
        return this._interval;
    }

    constructor(props: IFilterConfig) {
        if (typeof props.enabled === 'boolean') {
            this._enabled = props.enabled;
        }
        if (typeof props.interval === 'number') {
            this._interval = props.interval;
        }
    }

    serialize(): IFilterConfig {
        const data: IFilterConfig = {
        };
        if (typeof this._enabled !== 'undefined') {
            data.enabled = this._enabled;
        }
        if (typeof this._interval !== 'undefined') {
            data.interval = this._interval;
        }
        return data;
    }

    validate(): string[] {
        const validate = {
            enabled: !this._enabled ? true : typeof this._enabled === 'boolean',
            interval: !this._interval ? true : typeof this._interval === 'number',
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: IFilterConfig): FilterConfig {
        return new FilterConfig(props);
    }
}