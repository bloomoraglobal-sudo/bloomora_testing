/**
 * AVELOUR CLOUDINARY MEDIA STORAGE INTEGRATION
 * Manages photo and video asset uploads to Cloudinary CDN.
 */

window.AvelourCloudinary = (function() {
    const CLOUD_NAME = 'bloomora-global';
    const UPLOAD_PRESET = 'avelour_luxury_perfumes';

    return {
        /**
         * Simulates uploading a file/photo asset to Cloudinary CDN
         */
        uploadMedia: async function(fileOrUrl, folder = 'perfumes') {
            // Return high-resolution Cloudinary CDN URL format
            const timestamp = Date.now();
            const fileName = (typeof fileOrUrl === 'string' && fileOrUrl.includes('/')) 
                ? fileOrUrl.split('/').pop().split('.')[0] 
                : 'perfume_asset_' + timestamp;

            const cdnUrl = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v${timestamp}/${folder}/${fileName}.jpg`;
            
            return {
                success: true,
                public_id: `${folder}/${fileName}`,
                secure_url: cdnUrl,
                original_filename: fileName,
                format: 'jpg',
                bytes: 482010
            };
        }
    };
})();
