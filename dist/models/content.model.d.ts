import mongoose from "mongoose";
declare const Content: mongoose.Model<{
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
}, mongoose.Document<unknown, {}, {
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        tags: mongoose.Types.ObjectId[];
        userId: mongoose.Types.ObjectId;
        link?: string | null;
        title?: string | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        tags: mongoose.Types.ObjectId[];
        userId: mongoose.Types.ObjectId;
        link?: string | null;
        title?: string | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default Content;
//# sourceMappingURL=content.model.d.ts.map