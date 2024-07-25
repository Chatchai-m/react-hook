const AppCustom = {
    // MAIN_URL : "https://ocr.for-present.com",
    MAIN_URL : process.env.NODE_ENV === "production" ? process.env.REACT_APP_PROD_URL : process.env.REACT_APP_DEV_URL,

    AxiosResponseError : function(error)
    {
        if(error.response)
        {
            let response = error.response;
            console.warn(error);
            if(response.status === 401)
            {
                alert(response.data.message);
                localStorage.clear();
                window.location.href = "/";
            }
            else if(response.status === 404)
            {
                alert("Page not found");
            }
            else
            {
                alert(response.data.message);
            }
        }

    }
}
export default AppCustom;
