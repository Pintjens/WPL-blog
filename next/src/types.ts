import exp from "constants"

export const bearer = "7c14521191ea40787f38d4c5b2764fcd269784c1603ac09720a5142f8b2a35096e7cb532d7314ed2391a3f11a144daf073a7200d6e58d1d02892d1cc8914e0c26062904fc5288e8fa7456d8851cd8a610ebdca567277b7fd89dd4b75c65ba9d465d6940a626744c525d90dbe1f7e2fba8fcf7baeadacedcd45fa7a47f37dc7cd"; 

export interface ImageDetails {
    name: string,
    width: number,
    height: number,
    url: string
}

export interface Image {
    
        data: {
            id: number,
            attributes: {
                name: string,
                alternativeText: string,
                caption: string,
                width: number,
                height: number,
                formats: {
                    thumbnail: ImageDetails,
                    medium: ImageDetails,
                    small: ImageDetails },
                url: string,
                createdAt: string,
                updatedAt: string 
}}}

export interface Tag {
    id: number,
    attributes: {
        Name: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        blob: Blob
    }
}

export interface Logo {
    id: number,
    attributes: {
        name: string,
        alternativeText: string,
        caption: string,
        width: number,
        height: number,
        url: string,
    }
}

export interface Technologie{
    id: number,
    attributes: {
        Name: string,
        Url: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        Description: string,
        DescriptionSource: string,
        Logo: Logo
    }
}

export interface Profile {

    id: number,
    attributes: {
        intro: string,
        bio: string,
        profilePicture: Image
    }
        
}

export interface Blob {
id: number,
attributes: {
    title: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    message: string,
    Workday: number,
    Week: number,
    tags: TagsJson,
    technologies: TechnologiesJson 

}}

export interface SiteImages{
                id: number,
                attributes: {
                    createdAt: string,
                    updatedAt: string,
                    publishedAt: string,
                    defaultShopItem: Image,
                    logo: Image
                }
}

export interface Meme{
    id: number,
    attributes:{
        title: string,
        createdAt: string,
    image: Image
    }
}

export interface LogosJson {
    data : Logo[];
}
export interface LogoJson {
    data : Logo;
}
export interface BlobsJson {
    data : Blob[];
}
export interface BlobJson {
    data : Blob;
}
export interface ProfilesJson {
    data : Profile[];
}
export interface ProfileJson {
    data : Profile;
}
export interface TagsJson {
    data : Tag[];
}
export interface TagJson {
    data : Tag;
}
export interface TechnologiesJson {
    data : Technologie[];
}
export interface TechnologieJson {
    data : Technologie;
}
export interface SiteImagesJson {
    data : SiteImages;
}
export interface MemesJson {
    data : Meme[];
}