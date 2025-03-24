function handler(event) {
    var request = event.request;
    var country = request.headers['cloudfront-viewer-country'] ? request.headers['cloudfront-viewer-country'].value : 'OTHER';

    // Define your servers
    var content1Server = "https://content-1.example.com";
    var content2Server = "https://content-2.example.com";

    if (country === "BD") {
        return {
            statusCode: 302,
            headers: { "location": { "value": content1Server + request.uri } }
        };
    } else {
        return {
            statusCode: 302,
            headers: { "location": { "value": content2Server + request.uri } }
        };
    }
}
