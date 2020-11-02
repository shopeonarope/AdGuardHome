// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IRewriteEntry {
    answer?: string;
    domain?: string;
}

export default class RewriteEntry {
    readonly _answer: string | undefined;

    /**
     * Description: value of A, AAAA or CNAME DNS record
     * Example: 127.0.0.1
     */
    get answer(): string | undefined {
        return this._answer;
    }

    readonly _domain: string | undefined;

    /**
     * Description: Domain name
     * Example: example.org
     */
    get domain(): string | undefined {
        return this._domain;
    }

    constructor(props: IRewriteEntry) {
        if (typeof props.answer === 'string') {
            this._answer = props.answer.trim();
        }
        if (typeof props.domain === 'string') {
            this._domain = props.domain.trim();
        }
    }

    serialize(): IRewriteEntry {
        const data: IRewriteEntry = {
        };
        if (typeof this._answer !== 'undefined') {
            data.answer = this._answer;
        }
        if (typeof this._domain !== 'undefined') {
            data.domain = this._domain;
        }
        return data;
    }

    validate(): string[] {
        const validate = {
            domain: !this._domain ? true : typeof this._domain === 'string' && !this._domain ? true : this._domain,
            answer: !this._answer ? true : typeof this._answer === 'string' && !this._answer ? true : this._answer,
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: IRewriteEntry): RewriteEntry {
        return new RewriteEntry(props);
    }
}