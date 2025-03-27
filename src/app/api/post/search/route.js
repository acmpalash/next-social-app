import { connect } from "@/lib/mongodb/mongoose";
import Post from "@/lib/models/post.model";

export const POST = async (req) => {
    const data = await req.json();
    const searchTerm = await decodeURIComponent(data.searchTerm);
    try {
        await connect();
        const searchResult = await Post.find({
            $or: [
                {username: {$regex: searchTerm, $options: 'i' } },
                {name:  {$regex: searchTerm, $options: 'i' }},
                {text:  {$regex: searchTerm, $options: 'i' }},
            ],
        }).sort({createdAt: -1});
        return new Response(JSON.stringify(searchResult), {status: 200});
    } catch (err) {
        console.log(err);
        return new Response('Failed to search', {status: 500});
    }
};