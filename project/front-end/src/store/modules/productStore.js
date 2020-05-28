
// 초기 상태 정의
const initialState = {
    category: "all",
    categoryList: [

    ],
    productList: [

    ],
    CurrentProduct: "제닉스 STORMX TITAN MARK II 게이밍 마우스",
    Currentnv_mid: "10279461902",
    CurrentKeyword: "",
    searchKeyword: '',
    SearchMin: 0,
    SearchMax: 0,
    SearchTextField: '',
    reviewNumber: [],
    reviewLabels: ["무게감", '클릭감', '가격', '중학교', '배송'],
    ReviewData: [

    ],
    SentimentalLabel: ["1", '2', '3', '4', '5'],
    SentimentalNumber: [10, 20, 30, 40, 30],
    SentimentalData: [
        { review: 'SentimentalReview', result: '0', time: '2020', },
        { review: 'SentimentalReview', result: '0', time: '2020', },
        { review: 'SentimentalReview', result: '1', time: '2020', },
        { review: 'SentimentalReview', result: '1', time: '2020', },
        { review: 'SentimentalReview', result: '1', time: '2020', },
    ]
};

//category 액션 타입과 생성함수 정의
const CHANGE_CATEGORY = 'productList/CHANGE_CATEGORY';
const CHANGE_CATEGORYLIST = 'productList/CHANGE_CATEGORYLIST'
const CHANGE_PRODUCTLIST = 'productList/CHANGE_PRODUCTLIST';
const CHANGE_CURRENTPRODUCT = 'productList/CHANGE_CURRENTPRODUCT';
const CHANGE_CURRENTKEYWORD = 'productList/CHANGE_CURRENTKEYWORD';
const CHANGE_REVEIW = 'productList/CHANGE_REVIEW';
const CHANGE_SENTIMENTAL = 'productList/Sentimental';
const CHANGE_CURRENTNV_MID = 'productList/Currentnv_mid';
const CHANGE_REVIEWNUMBER = 'CHANGE_REVIEWNUMBER'
const SEARCH_KEYWORD = "searchKeyword";
const SEARCH_MIN = "search_min";
const SEARCH_MAX = "search_max";
const SEARCH_TEXTFIELD = "Search_TextField";


export const changeCategory = category => ({ type: CHANGE_CATEGORY, category });
export const changeCategoryList = categoryList => ({ type: CHANGE_CATEGORYLIST, categoryList })
export const changeProductList = productList => ({ type: CHANGE_PRODUCTLIST, productList });
export const changeCurrentProduct = CurrentProduct => ({ type: CHANGE_CURRENTPRODUCT, CurrentProduct });
export const changeCurrentKeyword = CurrentKeyword => ({ type: CHANGE_CURRENTKEYWORD, CurrentKeyword });
export const changeReview = ReviewData => ({ type: CHANGE_REVEIW, ReviewData });
export const changeSentimental = SentimentalData => ({ type: CHANGE_SENTIMENTAL, SentimentalData });
export const changeCurrentnv_mid = Currentnv_mid => ({ type: CHANGE_CURRENTNV_MID, Currentnv_mid });
export const Change_ReviewNumber = reviewNumber => ({ type: CHANGE_REVIEWNUMBER, reviewNumber });
export const search_keyword = searchKeyword => ({ type: SEARCH_KEYWORD, searchKeyword });
export const search_min = SearchMin => ({ type: SEARCH_MIN, SearchMin });
export const search_max = SearchMax => ({ type: SEARCH_MAX, SearchMax });
export const Search_TextField = SearchTextField => ({ type: SEARCH_TEXTFIELD, SearchTextField });
//카테고리를 바꾸는 action이 클릭된 순간 아래의 productList또한 바뀌어야 하기에 세팅하는것이다.

export default function ProductList(state = initialState, action) {
    switch (action.type) {
        case CHANGE_CATEGORY:
            return {
                ...state,
                category: action.category,
                //productList: action.productList,
            };
        case CHANGE_CATEGORYLIST:
            return {
                ...state,
                categoryList: action.categoryList,
            };
        case CHANGE_PRODUCTLIST:
            return {
                ...state,
                productList: action.productList,
            }
        case CHANGE_CURRENTPRODUCT:
            return {
                ...state,
                CurrentProduct: action.CurrentProduct,
            }
        case CHANGE_CURRENTKEYWORD:
            return {
                ...state,
                CurrentKeyword: action.CurrentKeyword,
            }
        case CHANGE_REVEIW:
            return {
                ...state,
                ReviewData: action.ReviewData,
            }
        case CHANGE_SENTIMENTAL:
            return {
                ...state,
                SentimentalData: action.SentimentalData,
            }
        case CHANGE_CURRENTNV_MID:
            return {
                ...state,
                Currentnv_mid: action.Currentnv_mid,
            }
        case CHANGE_REVIEWNUMBER:
            return {
                ...state,
                reviewNumber: action.reviewNumber,
            }
        case SEARCH_KEYWORD:
            return {
                ...state,
                searchKeyword: action.searchKeyword,
            }
        case SEARCH_MIN:
            return {
                ...state,
                SearchMin: action.SearchMin,
            }
        case SEARCH_MAX:
            return {
                ...state,
                SearchMax: action.SearchMax,
            }
        case SEARCH_TEXTFIELD:
            return {
                ...state,
                SearchTextField: action.SearchTextField,
            }
        default:
            return state;
    }

}

/*
1. init에 변수 명 값 추가하기
2. 액션 타입과 함수 정의
3. 함수의 return 정리
4. 함수에 붙이기
*/
