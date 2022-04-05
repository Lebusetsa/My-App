import { StatusBar } from 'react-native';
import { StyleSheet,BlueColor, WhiteColor, GreenColor, Text, View ,Image ,} from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar/>
      
      <View style={styles.container}>
      <View style={styles.outer_view}> 

      
      <Image style={styles.logo}
      source={require("./limko.png")} />
      
      
      <Text style={styles.title}>Limkokwing Student Portal</Text>

      <View style={styles.picture}>
      <Image style={styles.pic}
      source={require("./moorosi.jpg")} />
      </View>
      
         <Text style={styles.username}>Lebusetsa   Moorosi</Text>
        <Text style={styles.id}>Student ID:   901013575</Text>
        <Text style={styles.name_color}>Student name :      Lebusetsa</Text>
        <Text style={styles.sur_color}>Student Surname :       Moorosi</Text>
        <Text style={styles.id}>BSC In Software Engineering with Multi-Media Y2 S2</Text>
        <Text style={styles.mail}>Email: moorosilebusetsa@gmail.com</Text>
       </View>
       <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <View>
       <Text style={styles.Semester}>Semester 2 Year 2</Text>
       </View>
       <View style={styles.grade_container}>
       <View style={styles.course}>
         <Text style={styles.font_grade}>Courses                                                               Grades</Text>
       </View>
       <View style={styles.empty_views}/>
       <View style={styles.course}>
         <Text style={styles.MDP}>Mobile Device Programming                                                    A+   </Text>
       </View>
       <View style={styles.empty_views}/>
       <View style={styles.course}>  
         <Text style={styles.MDP}>C++ II Programming                                                                  B+  </Text>
       </View>
       <View style={styles.empty_views}/>
       <View style={styles.course}>
         <Text style={styles.MDP}>Java Programming I                                                                  B+</Text>
       </View>
       <View style={styles.empty_views}/>
       <View style={styles.course}>
         <Text style={styles.MDP}>Database System                                                                     A</Text>
       </View>
       <View style={styles.empty_views}/>
       <View style={styles.course}>
         <Text style={styles.MDP}>Software modeling and Analysis                                           B-</Text>
       </View>
       </View>
       <View>
       <Text style={styles.Semester}>Semester 1 Year 2</Text>
       </View>
       <View style={styles.grade_container}>
       <View style={styles.course}>
         <Text style={styles.font_grade}>Courses                                                                Grades</Text>
       </View>
       <View style={styles.empty_views}/>
       <View style={styles.course}>
         <Text style={styles.MDP}>Intro To Web Design                                                                   A+   </Text>
       </View>
       <View style={styles.empty_views}/>
       <View style={styles.course}>
         <Text style={styles.MDP}>C++ IProgramming                                                                       A  </Text>
       </View>
       <View style={styles.empty_views}/>
       <View style={styles.course}>
         <Text style={styles.MDP}>Multi-Media Technology                                                          B+</Text>
       </View>
       <View style={styles.empty_views}/>
       <View style={styles.course}>
         <Text style={styles.MDP}>Internet Technology                                                                   B-</Text>
       </View>
       <View style={styles.empty_views}/>
       <View style={styles.course}>
         <Text style={styles.MDP}>Data Communication & Networking                                     A</Text>
       </View>
       </View>
       <View>
       <Text style={styles.Semester}>Semester 2 Year 1</Text>
       </View>
       <View style={styles.grade_container}>
       <View style={styles.course}>
         <Text style={styles.font_grade}>Courses                                                                  Grades</Text>
       </View>
       <View style={styles.empty_views}/>
       <View style={styles.course}>
         <Text style={styles.MDP}>Calculus I                                                                                       A+   </Text>
       </View>
       <View style={styles.empty_views}/>
       <View style={styles.course}>
         <Text style={styles.MDP}>Introduction To Multi-Media                                                            A </Text>
       </View>
       <View style={styles.empty_views}/>
       <View style={styles.course}>
         <Text style={styles.MDP}>Principles of Software Engineering                                    B-</Text>
       </View>
       <View style={styles.empty_views}/>
       <View style={styles.course}>
         <Text style={styles.MDP}>Introduction to Data Communicationb                                   B</Text>
       </View>
       <View style={styles.empty_views}/>
       <View style={styles.course}>
         <Text style={styles.MDP}>Introduction to Database                                                              C</Text>
       </View>
       </View>
       <View>
       <Text style={styles.Semester}>Semester 1 Year 1</Text>
       </View>
       <View style={styles.grade_container}>
       <View style={styles.course}>
         <Text style={styles.font_grade}>Courses                                                                      Grades</Text>
       </View>
       <View style={styles.empty_views}/>
       <View style={styles.course}>
         <Text style={styles.MDP}>Creative Studies                                                                               A+   </Text>
       </View>
       <View style={styles.empty_views}/>
       <View style={styles.course}>
         <Text style={styles.MDP}> Principles of Programming logic and Design                            B+  </Text>
       </View>
       <View style={styles.empty_views}/>
       <View style={styles.course}>
         <Text style={styles.MDP}>Fundamentals of Design                                                                   B+</Text>
       </View>
       <View style={styles.empty_views}/>
       <View style={styles.course}>
         <Text style={styles.MDP}>Business Communication                                                                A</Text>
       </View>
       <View style={styles.empty_views}/>
       <View style={styles.course}>
         <Text style={styles.MDP}>Introduction To computer Skills                                                        B-</Text>
       </View>
       </View>

       </ScrollView>
    </SafeAreaView>
       
       
    </View>


    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#e4f6f6',
    
  },
  scrollView:{backgroundColor:'#e4f6f6',
              marginHorizontal:30,
},

  title:{
    color:'white',
    fontSize:25,
    fontFamily:'serif',
    alignItems:'center',
    marginBottom:12,
    marginLeft: 10,
    
  },
  username:{
    color:'black',
    fontSize:20,
    marginTop:10,
    marginBottom:5,
    fontWeight:'bold',
  },
  pic:{
    height:110,
    width:110,
    borderRadius:70,
    borderWidth:2,
    borderColor:'brown',
   
  },

  picture:{
    height:110,
    width:110,
    borderRadius:70,
    
  },
  logo:{
    width:120,
    height:50,
    marginTop:5,
  },
 
  outer_view:{ 
  
    backgroundColor: '#0f9797',
    alignItems: 'center',
    width:'100%',
  },


  name_color:{
    color:'black',
    fontSize:12,
    marginLeft:5,
    fontWeight:'bold',
  },

  sur_color:{
    color:'black',
    fontSize:12,
    marginLeft:5,
    fontWeight:'bold',
  },


  id:{
    color:'black',
  fontSize:12,
  marginLeft:5,
  fontWeight:'bold',
 },
 mail:{color:'blue',
 fontSize:12,
 marginLeft:2,
 marginBottom:5,
 fontWeight:'bold',},

 Semester:{
   color:'black',
   fontSize:20,
   fontWeight:'bold',
   marginTop:30,
 },
 course:{
   flex:1,
  backgroundColor:'#0f9797',
  alignItems:'right',
  width:'100%',
  height:20,
  alignItems:'center',
  justifyContent:'center',
  
 },
 font_grade:{
  color:'white',
  fontSize:12,
  fontWeight:'bold',
  alignItems: 'center',
  justifyContent:'center',
 },
 empty_views:{
  backgroundColor:'#e4f5f5',
  alignItems:'right',
  width:'100%',
  height:20,
  alignItems:'center',
  justifyContent:'center',
 },
 MDP:{
  color:'white',
  fontSize:10,
  marginTop:4,
  alignItems: 'center',
  justifyContent:'center',
},
grade_container:{
  borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'black',
    marginBottom:5,
},


 
});
