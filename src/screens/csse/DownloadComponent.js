import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Platform, Pressable, Text } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { shareAsync } from 'expo-sharing';
import * as Print from 'expo-print';


export default function DownloadComponent() {
  const downloadFromUrl = async () => {
    const filename = "agreement.pdf";
    const FILE_ID = `1tdINNokHCzuz_am52jUkMyLoPzAZB1JO`;
    const result = await FileSystem.downloadAsync(

      `https://drive.google.com/uc?export=download&id=${FILE_ID}`,

      FileSystem.documentDirectory + filename
    );
    console.log(result);

    save(result.uri, filename, result.headers["Content-Type"]);
  };

  const save = async (uri, filename, mimetype) => {
    const defaultMimeType = 'application/pdf'; // Default MIME type for a PDF file
    const validMimeType = mimetype || defaultMimeType; // Use the provided MIME type or default to PDF

    if (Platform.OS === "android") {
      const permissions = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
      if (permissions.granted) {
        const base64 = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
        await FileSystem.StorageAccessFramework.createFileAsync(permissions.directoryUri, filename, validMimeType)
          .then(async (uri) => {
            await FileSystem.writeAsStringAsync(uri, base64, { encoding: FileSystem.EncodingType.Base64 });
          })
          .catch(e => console.log(e));
      } else {
        shareAsync(uri);
      }
    } else {
      shareAsync(uri);
    }
  };
  const shareFile = async(uri) =>{
    try{
     await shareAsync(uri);
    }catch(error){
      console.log("Failed to share the file" , error)
    }
  };
  const printFile = async (uri) => {
  try {
    const result = await Print.printAsync({ uri });
    console.log("Printing result:", result);
  } catch (error) {
    console.error("Failed to print the file:", error);
  }
};

  return (
    <View style={styles.container}>
     
      <Pressable onPress={() => printFile(FileSystem.documentDirectory + "agreement.pdf")}>
        <Text style={{ fontSize: 18, color: 'green' }}> [ View ]</Text>
      </Pressable>
      <Pressable onPress={()=>shareFile(FileSystem.documentDirectory+"agreement.pdf")}>
        <Text style={{ fontSize: 18, color: 'blue' }}> [ Share ]</Text>
      </Pressable>
      <Pressable onPress={downloadFromUrl}>
        <Text style={{ fontSize: 18, color: 'red' }}> [ Download ]</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
  
    justifyContent: 'center',
  },
});