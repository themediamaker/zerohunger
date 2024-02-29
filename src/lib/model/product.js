import mongoose from "mongoose";

const productsModel = new mongoose.Schema({
    _id: Number,
    title: String,
    author_id: Number,
    genre: String
})

export const Product = mongoose.models.books || mongoose.model("books", productsModel)