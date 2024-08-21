import styled from "styled-components/native";
import  {OPENAI_API_KEY}  from "@env"

/**
 * 
 * davinci 모델 호출
 * @param question
 */

export const testDavinci = (question: any) => {
    const data = JSON.stringify({
        "model": "text-davinci-003",
        "prompt": question,
        "max_tokens": 500,
        "temperature": 0,
        "top_p": 1,
        "stream": false,
        "frequency_penalty": 0,
        "presence_penalty": 0,
        "logprobs": null
    });

    return fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            'content-type': "application/json",
            "Authorization": "Bearer" + process.env.OPENAI_API_KEY,
        },
        body: data,
    }). then(response => response.json());
}

/**
 *  gpt-3.5-turbo 모델 호출
 * @param { * } question
 */

export const TestFetch =  (question: any) => {
    const data = JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [
            {"role": "system", "content": ""},
            {"role": "user", "content": question}
        ]
    });
    return fetch('https://api.openai.com/v1/chat/complations', {
        method: "POST",
        headers: {
            'content-type': "aplication/json",
            'Authorization': "Bearer" + process.env.OPENAI_API_KEY,
        },
        body: data,
    }).then(response => response.json());
}

const Container = styled.View``;
