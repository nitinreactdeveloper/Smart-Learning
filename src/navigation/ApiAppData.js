import axios from 'react-native-axios'

const BaseUrl = 'https://shopninja.in/smart_learning/api2/public/index.php'

export const getAppData = async (setFetching, setAppData) => {

    setFetching({ type: 'setLoading', value: true })

    // # 1 all schools
    var data = new FormData();
    data.append('city_id', '1');
    data.append('state_id', '2');
    await axios.post(BaseUrl + "/school_list", data, {
        headers: { "Content-type": "multipart/form-data" }
    })
        .then((response) => {
            console.log(response.data.msg, 'school_list Api successful')
            if (response.data.status === 200) {
                setAppData({ type: 'setSchools', value: response.data.msg })
            }
        })
        .catch((error) => {
            console.log(error, 'error while fetching school_list Api')
        })


    // 2 cities
    await axios.post(BaseUrl + "/city_list"
        // {
        //     headers: { "Content-type": "multipart/form-data" }
        // }
    )
        .then((response) => {
            console.log(response.data.msg, 'city_list Api successful')
            if (response.data.status === 200) {
                setAppData({ type: 'setCities', value: response.data.msg })
            }
        })
        .catch((error) => {
            console.log(error, 'error while fetching city_list Api')
        })

    // 3 states
    await axios.post(BaseUrl + "/state_list"
        // {
        //     headers: { "Content-type": "multipart/form-data" }
        // }
    )
        .then((response) => {
            console.log(response.data.msg, 'state_list Api successful')
            if (response.data.status === 200) {
                setAppData({ type: 'setStates', value: response.data.msg })
            }
        })
        .catch((error) => {
            console.log(error, 'error while fetching state_list Api')
        })


    setFetching({ type: 'setLoading', value: false })

}


const getCats = async (setAppData) => {
    let data = new FormData();
    data.append('cat_id', "0")
    await axios.post(BaseUrl + "/get_sn_categories", data, {
        headers: { "Content-type": "multipart/form-data" }
    })
        .then((response) => {
            console.log(response.data.msg, 'get_sn_categories Api successful')
            if (response.data.status === 200) {
                setAppData({ type: 'setCategories', value: response.data.msg })
            }
        })
        .catch((error) => {
            console.log(error, 'error while fetching get_sn_categories Api')
        })
}


const getBanners = async (setAppData) => {
    let data = new FormData();
    data.append('platform', "2")
    await axios.post(BaseUrl + "/get_banners", data, {
        headers: { "Content-type": "multipart/form-data" }
    })
        .then((response) => {
            console.log(response.data.msg, 'get_banners recommend Api successful')
            if (response.data.status === 200) {
                setAppData({ type: 'setBanners', value: response.data.msg })
            }
        })
        .catch((error) => {
            console.log(error, 'error while fetching get_banners recommend Api')
        })
}


const getRecommendedCourses = async (setAppData) => {
    let data = new FormData();
    data.append('filter_by', "recommend")
    data.append('fitness_goal_id', "1")
    await axios.post(BaseUrl + "/get_all_courses", data, {
        headers: { "Content-type": "multipart/form-data" }
    })
        .then((response) => {
            console.log(response.data.msg, 'get_all_courses recommend Api successful')
            if (response.data.status === 200) {
                setAppData({ type: 'setRecommendedCourses', value: response.data.msg })
            }
        })
        .catch((error) => {
            console.log(error, 'error while fetching get_all_courses recommend Api')
        })
}


const getSectionSequence = async (setAppData) => {
    let data = new FormData();
    data.append('cust_id', "22")
    data.append('fitness_goal_id', "1")
    await axios.post(BaseUrl + "/app_homepage_content", data, {
        headers: { "Content-type": "multipart/form-data" }
    })
        .then((response) => {
            console.log(response.data.msg, 'app_homepage_content Api successful')
            if (response.data.status === 200) {
                let data = response.data.msg
                let sorted = data.sort((a, b) => a.sort_order > b.sort_order)
                setAppData({ type: 'setSectionSequence', value: sorted })
            }
        })
        .catch((error) => {
            console.log(error, 'error while fetching app_homepage_content Api')
        })
}