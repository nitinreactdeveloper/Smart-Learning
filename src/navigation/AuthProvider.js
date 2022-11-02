import { View, Text, AppState } from 'react-native'
import React, { useState, useEffect, createContext, useReducer, useCallback } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'react-native-axios';
import { getAppData } from './ApiAppData';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const BaseUrl = 'https://shopninja.in/smart_learning/api2/public/index.php'

    const [userToken, setUserToken] = useState(false)
    const [userType, setUserType] = useState('student')
    const [userDetails, setUserDetails] = useState({})

    const [school, setschool] = useState()
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);

    const initialFetch = {
        loading: false,
        success: false,
        error: false,
        response: false
    }
    const fetchReducer = (state, action) => {
        switch (action.type) {
            case 'setLoading': return { ...state, loading: action.value }
            case 'setSuccess': return { ...state, success: action.value }
            case 'setError': return { ...state, error: action.value }
            case 'setResponse': return { ...state, response: action.value }
            case 'reset': return initialFetch
            default: return state
        }
    }
    const [fetching, setFetching] = useReducer(fetchReducer, initialFetch)

    const inititalAppData = {
        schools: "", cities: "", states: "",
        allSubjects: ""
    }

    const dataReducer = (state, action) => {
        switch (action.type) {
            case 'setSchools': return { ...state, schools: action.value }
            case 'setCities': return { ...state, cities: action.value }
            case 'setStates': return { ...state, states: action.value }
            case 'setAllSubject': return{ ...state, allsubjects: action.value}
        }
    }

    const [appData, setAppData] = useReducer(dataReducer, inititalAppData)

    const getApiData = () => getAppData(setFetching, setAppData)

    const getIntialLaunch = () => {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            }
        })
    }

    const getToken = async () => {
        let user
        await AsyncStorage.getItem('userToken').then(value => {
            if (value !== null) {
                user = value
                setUserToken(value)
            }
        })
        getUserType(user)
    }

    const getUserType = async (id) => {
        let userType
        await AsyncStorage.getItem('preference').then(value => {
            if (value !== null) {
                userType = value
                setUserType(value)
            }
        })
        getUserDetails(id,userType)
    }


    useEffect(() => {
        getToken()
        // getFcmToken()
        getIntialLaunch()
        getApiData()
    }, [])

    const getUserDetails = async (id,userType) => {
        setFetching({ type: 'setLoading', value: true })
        var form = new FormData()
        form.append('teacher_id', userType === 'teacher' ? id : '');
        form.append('student_id',  userType === 'student' ? id : '');
        await axios.post(BaseUrl + "/teacher_stu_details", form, {
            headers: { "Content-type": "multipart/form-data" }
        })
            .then((response) => {
                console.log(response.data,'userDetails')
                setFetching({ type: 'setLoading', value: false })
                if (response.data.status == 200) {
                    setUserDetails(response.data.msg[0])
                }
            })
            .catch((error) => {
                console.log(error, 'error while fetching Api')
                setFetching({ type: 'setLoading', value: false })
            })
    }

    const sendOtp = async (mobile, navigation) => {
        setFetching({ type: 'setLoading', value: true })
        // navigation.navigate('VerifyAccount', { mobile: mobile })
        navigation.navigate('Home')

        
        // setFetching({ type: 'setLoading', value: false })
        // var form = new FormData()
        // form.append('mob', mobile);
        // await axios.post(BaseUrl + "/tr_send_otp", form, {
        //     headers: { "Content-type": "multipart/form-data" }
        // })
        //     .then((response) => {
        //         setFetching({ type: 'setLoading', value: false })
        //         if (response.data.status == 200) {
        //             navigation.navigate('VerifyAccount', { mobile: mobile })
        //         }
        //         else {
        //             setFetching({ type: 'setError', value: { heading: "Can't Send Otp !", data: response.data.msg } })
        //         }
        //     })
        //     .catch((error) => {
        //         console.log(error, 'error while fetching Api')
        //         setFetching({ type: 'setLoading', value: false })
        //         setFetching({ type: 'setError', value: { heading: "Can't Send Otp !", data: error.message } })
        //     })
    }


    return (
        <AuthContext.Provider
            value={{
                userToken, userType, setUserType, userDetails, setUserDetails, fetching, setFetching, school, setschool,
                appData,
                login: async (email, password) => {
                    const apiUrl = userType === 'student' ? '/student_login' : '/teacher_login'
                    console.log(email, password, 'username,password entered are')
                    setFetching({ type: 'setLoading', value: true })
                    var form = new FormData()
                    form.append('email', email);
                    form.append('password', password);
                    await axios.post(BaseUrl + apiUrl, form, {
                        headers: { "Content-type": "multipart/form-data" }
                    })
                        .then((response) => {
                            console.log(response.data, apiUrl, 'Api successful')
                            setFetching({ type: 'setLoading', value: false })
                            if (response.data.status === 200) {
                                let user = response.data.msg?.student_id || response.data.msg?.teacher_id
                                setUserToken(user)
                                AsyncStorage.setItem('userToken', user)
                                AsyncStorage.setItem('preference', userType)
                                setUserDetails(response.data.msg)
                            }
                            else {
                                setFetching({ type: 'setError', value: { heading: "Login Error !", data: response.data.msg } })
                            }
                        })
                        .catch((error) => {
                            console.log(error, 'error while fetching Api')
                            setFetching({ type: 'setLoading', value: false })
                            setFetching({ type: 'setError', value: { heading: "Login Error !", data: error.message } })
                        })

                },

                register: async (fName, lName, email, mobile, password, city, state, school, navigation ) => {
                    const apiUrl = userType === 'student' ? '/student_signup' : '/teacher_signup'
                    console.log(email, password, 'username,password entered are')
                    setFetching({ type: 'setLoading', value: true })
                    var form = new FormData()
                    form.append('f_name', fName);
                    form.append('l_name', lName);
                    form.append('email', email);
                    form.append('mobile', mobile);
                    form.append('password', password);
                    form.append('city_id', city);
                    form.append('state_id', state);
                    form.append('school_id', school);
                    await axios.post(BaseUrl + apiUrl, form, {
                        headers: { "Content-type": "multipart/form-data" }
                    })
                        .then((response) => {
                            console.log(response.data, apiUrl, 'Api successful')
                            setFetching({ type: 'setLoading', value: false })
                            if (response.data.status === 200) {
                                setUserDetails(response.data.msg)
                                sendOtp(navigation)
                                // AsyncStorage.setItem('userToken', user)
                                // setFetching({ type: 'setSuccess', value: { heading: 'Otp Sent !', data: `Otp sent to ${mobile} successfully.`, onPress: () => navigation.navigate('Otp', { mobile: mobile }) } })
                                // setTimeout(() => {
                                //     setFetching({ type: 'setSuccess', value: false })
                                //     navigation.navigate('Otp', { mobile: mobile })
                                // }, 500)
                            }
                            else {
                                setFetching({ type: 'setError', value: { heading: "Registration Error !", data: response.data.msg } })
                            }
                        })
                        .catch((error) => {
                            console.log(error, 'error while fetching Api')
                            setFetching({ type: 'setLoading', value: false })
                            setFetching({ type: 'setError', value: { heading: "Registration Error !", data: error.message } })
                        })
                },

                verifyOtp: async (mobile, otp,) => {
                    console.log(mobile, otp, 'mobile, otp entered are')
                    setFetching({ type: 'setLoading', value: true })
                    let user = userDetails?.student_id || userDetails?.teacher_id
                    setUserToken(user)
                    AsyncStorage.setItem('userToken', user)
                    AsyncStorage.setItem('preference', userType)
                    setFetching({ type: 'setLoading', value: false })
                    // var form = new FormData()
                    // form.append('mob', mobile);
                    // form.append('otp', otp);
                    // await axios.post(BaseUrl + "/tr_verify_otp", form, {
                    //     headers: { "Content-type": "multipart/form-data" }
                    // })
                    //     .then((response) => {
                    //         console.log(response.data.msg, 'tr_verify_otp Api successful')
                    //         setFetching({ type: 'setLoading', value: false })
                    //         if (response.data.status === 200) {
                    //             setUserToken(userDetails.cust_id)
                    //             AsyncStorage.setItem('userToken', userDetails.cust_id)
                    //         }
                    //         else {
                    //             setFetching({ type: 'setError', value: { heading: "Can't Verify Otp !", data: response.data.msg } })
                    //         }
                    //     })
                    //     .catch((error) => {
                    //         console.log(error, 'error while fetching Api')
                    //         setFetching({ type: 'setLoading', value: false })
                    //         setFetching({ type: 'setError', value: { heading: "Can't Verify Otp !", data: error.message } })
                    //     })
                },
                logout: async () => {
                    setFetching({ type: 'setLoading', value: true })
                    try {
                        setUserDetails({})
                        await AsyncStorage.getItem('userToken').then((value) => console.log(value, 'is being logged out'))
                        await AsyncStorage.removeItem('userToken')
                        setUserToken(null)
                    }
                    catch (e) {
                        console.log(e.message)
                    }
                    setFetching({ type: 'setLoading', value: false })
                },

            }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }