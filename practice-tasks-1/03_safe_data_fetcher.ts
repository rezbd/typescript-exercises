type UserResponse = {
    info?: {
        address?: {
            zipCode?: string;
        }
    }
};


function getZipCode (data: UserResponse): string {
    return data.info?.address?.zipCode ?? "00000";
}