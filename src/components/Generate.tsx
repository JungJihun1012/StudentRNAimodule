import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import apiClient from '../api/api';

const GenerateText: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenerateText = async () => {
    setLoading(true);
    try {
      const result = await apiClient.post('/generate', { prompt });
      setResponse(result.data.choices[0].message.content);  // OpenAI의 응답 구조에 맞춰 수정
    } catch (error) {
      console.error('Error generating text:', error);
      setResponse('Failed to generate text');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generate Text with OpenAI</Text>
      <TextInput
        style={styles.input}
        value={prompt}
        onChangeText={setPrompt}
        placeholder="Enter your prompt here..."
        multiline
      />
      <Button onPress={handleGenerateText} title={loading ? 'Generating...' : 'Generate Text'} disabled={loading} />
      <View>
        <Text style={styles.responseTitle}>Response:</Text>
        <Text>{response}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  title: { fontSize: 24, marginBottom: 16, textAlign: 'center' },
  input: { height: 100, borderColor: 'gray', borderWidth: 1, marginBottom: 16, padding: 8, textAlignVertical: 'top' },
  responseTitle: { fontSize: 20, marginTop: 16 },
});

export default GenerateText;
