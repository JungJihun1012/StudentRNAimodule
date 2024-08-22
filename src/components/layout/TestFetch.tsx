import styled from "styled-components/native";
import  {OPENAI_API_KEY}  from "@env"

/**
 * 
 * davinci 모델 호출
 * @param question
 */

export const testDavinci = async (question: string) => {
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

    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            'content-type': "application/json",
            "Authorization": "Bearer" + OPENAI_API_KEY,
        },
        body: data,
    });
    return await response.json();
}

/**
 *  gpt-3.5-turbo 모델 호출
 * @param { string } question
 */

export const TestFetch = async  (question: string) => {
    const data = JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [
            {"role": "system", "content": ""},
            {"role": "user", "content": question}
        ]
    });
    const response = await fetch('https://api.openai.com/v1/chat/complations', {
        method: "POST",
        headers: {
            'content-type': "aplication/json",
            'Authorization': "Bearer" + OPENAI_API_KEY,
        },
        body: data,
    });
    return await response.json();
}

