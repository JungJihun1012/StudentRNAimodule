import { SetStateAction, useState } from "react";
import styled from "styled-components/native";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { TestFetch } from "../api/ChatAPI";

const HomeScreen = () => { 
    const [answer, setAnswer] = useState("입력 값 없음");

    const getAnswer = () => {
        setAnswer("입력 값 없음");
        TestFetch("오늘 기분 어때")
        .then((result: { choices: { message: { content: SetStateAction<string>; }; }[]; }) => {
            setAnswer(result.choices[0].message.content);
        }).catch((error: any) => console.log('error', error));
    }

    return(
        <SafeAreaView>
            <View style={{height: '100%'}}>
                <View style={{justifyContent: 'center', paddingVertical: 100}}>
                    <Text>텍스트</Text>
                     <TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#235232',  justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, height: 50}}  onPress={()=>{getAnswer()}}>
                        <Text style={{color: '#fff', fontSize: 25}}>테스트 결과를 보자</Text>
                     </TouchableOpacity>
                     {
                        answer && 
                            <Text>{answer}</Text>
                     }
                </View>
            </View>
        </SafeAreaView>
    )

}

const Container = styled.View`

`;
export default HomeScreen;