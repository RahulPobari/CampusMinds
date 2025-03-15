import { Cloudinary } from '@cloudinary/url-gen';

export const cld = new Cloudinary({
    cloud: {
        cloudName: "dxcz8frhb",  // Hardcoded Cloud Name
        apiKey: "748188153748313",  // Hardcoded API Key
    },
    url: {
        secure: true
    }
});

export const options = {
    upload_preset: "CampusMinds",
    tag: "sample",
    unsigned: true
};
