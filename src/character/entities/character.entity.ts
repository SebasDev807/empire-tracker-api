import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Character extends Document {

    @Prop({ unique: true, index: true })
    public name: string;

    @Prop({ isRequired: true, index: true })
    public description: string;

    @Prop({ index: true })
    public image: string;

    @Prop({ index: true })
    public planet: string;

    @Prop({isRequired:true, unique:true, index:true})
    public index:number;


}

export const CharacterSchema = SchemaFactory.createForClass(Character)