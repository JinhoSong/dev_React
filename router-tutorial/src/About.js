import React from "react";
import qs from "qs";

const about = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true // 이 설정으로 문자열 맨 앞의 ? 를 생략한다.
  });

  const showDetail = query.detail === "true"; // 쿼리의 파싱 결과 값은 문자열이다.

  return (
    <div>
      <h1>소개</h1>
      <p>라우터 기초 실습 예제</p>
      {showDetail && <p>값을 true로 설정!</p>}
    </div>
  );
};

export default about;
