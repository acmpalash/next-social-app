import User from '../models/user.model';
import { connect } from '../mongodb/mongoose';

export const createOrUpdateUser = async (
    id,
    first_name,
    last_name,
    email_addresses,
    image_url,
    username
) => {
    try {
        await connect();
    const user = await User.findOneAndUpdate(
        {clerkId: id},
        {
            $set: {
                firstName: first_name,
                lastName: last_name,
                avatar: image_url,
                email: email_addresses[0].email_address,
                username,
            },
        },
        {new: true, upsert: true}
    );
    return user;
    } catch (error) {
        console.log('Error creating or updating user:', error);
    }    
};

export const deleteUser = async (id ) => {
    try {
        await connect();
        await User.findOneAndDelete({ clerkId: id});
    } catch (error) {
        console.log("Error deleting User:", error)
    }
};