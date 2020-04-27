// 초기 상태 정의
const initialState = {
    category: "all",
    productList: [
        {
            title: "title part",
            subtitle: "sub part",
            avatarSrc:
                "https://shopping-phinf.pstatic.net/main_1272533/12725335936.20180607174129.jpg?type=f60",
            imgSrc:
                "https://shopping-phinf.pstatic.net/main_1272533/12725335936.1.20180607174129.jpg?type=f300",
            description: "간단한 제품 정보1",
        },
        {
            title: "title part",
            subtitle: "sub part",
            avatarSrc:
                "https://shopping-phinf.pstatic.net/main_1272533/12725335936.20180607174129.jpg?type=f60",
            imgSrc:
                "https://shopping-phinf.pstatic.net/main_1272533/12725335936.1.20180607174129.jpg?type=f300",
            description: "간단한 제품 정보2",
        },
        {
            title: "title part",
            subtitle: "sub part",
            avatarSrc:
                "https://shopping-phinf.pstatic.net/main_1272533/12725335936.20180607174129.jpg?type=f60",
            imgSrc:
                "https://shopping-phinf.pstatic.net/main_1272533/12725335936.1.20180607174129.jpg?type=f300",
            description: "간단한 제품 정보3",
        },
        {
            title: "title part",
            subtitle: "sub part",
            avatarSrc:
                "https://shopping-phinf.pstatic.net/main_1536959/15369599180.20181002114630.jpg?type=f300",
            imgSrc:
                "https://shopping-phinf.pstatic.net/main_1536959/15369599180.20181002114630.jpg?type=f300",
            description: "간단한 제품 정보4",
        },
        {
            title: "title part",
            subtitle: "sub part",
            avatarSrc:
                "https://shopping-phinf.pstatic.net/main_1536959/15369599180.20181002114630.jpg?type=f300",
            imgSrc:
                "https://shopping-phinf.pstatic.net/main_1536959/15369599180.20181002114630.jpg?type=f300",
            description: "간단한 제품 정보5",
        },
        {
            title: "title part",
            subtitle: "sub part",
            avatarSrc:
                "https://shopping-phinf.pstatic.net/main_1536959/15369599180.20181002114630.jpg?type=f300",
            imgSrc:
                "https://shopping-phinf.pstatic.net/main_1536959/15369599180.20181002114630.jpg?type=f300",
            description: "간단한 제품 정보6",
        },
    ],

};

//category 액션 타입과 생성함수 정의
const CHANGE_CATEGORY = 'productList/CHANGE_CATEGORY';
const CHANGE_PRODUCTLIST = 'productList/CHANGE_PRODUCTLIST';

export const changeCategory = category => ({ type: CHANGE_CATEGORY, category });
export const changeProductList = productList => ({ type: CHANGE_PRODUCTLIST, productList });
//카테고리를 바꾸는 action이 클릭된 순간 아래의 productList또한 바뀌어야 하기에 세팅하는것이다.

export default function ProductList(state = initialState, action) {
    switch (action.type) {
        case CHANGE_CATEGORY:
            return {
                ...state,
                category: action.category,
                // productList: action.productList,
            };
        default:
            return state;
    }

}

