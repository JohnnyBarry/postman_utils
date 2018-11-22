{

    log : (text) => {
        console.log(text);
    }

    getEncryptRequest : (plain_text) => {
        return {
            url: 'https://coreautotest4.corehr.com/pls/coreportal_atqain/ajax_test_data_common.ajax_encrypt',
            method: 'POST',
            header: {
                'Content-Type': 'multipart/form-data'
            },
            body: {
                mode: 'formdata',
                formdata: [
                    { key: "p_plaintext", value: plain_text, disabled: false, description: { content: "", type: "text/plain" } }
                ]
            }
        };
    }
}
