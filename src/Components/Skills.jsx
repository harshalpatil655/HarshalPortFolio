import React from "react";
import styles from "../CSS/Skills.module.css";
export const Skills = () => {
  return (
    <div className={styles.skills} id={"skills"}>
      <div className={styles.skillstitle}>
        <h1 style={{ textDecoration: "underline", marginTop: "30px" }}>
          Skills
        </h1>
        <p style={{ marginTop: "-18px", fontWeight: "600", color: "gray" }}>
          My Technical Skills
        </p>
      </div>
      <div className={styles.skillsflex}>
        <div className={styles.logodiv}>
          <div>
            <img
              className={styles.skillsimage}
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/html_5_e17a3be25f.svg"
              alt="html"
            />
            <p>HTML</p>
          </div>
          <div>
            <img
              className={styles.skillsimage}
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/css_3_3dbbdc86b6.svg"
              alt="css"
            />
            <p>CSS</p>
          </div>
          <div>
            <img
              className={styles.skillsimage}
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/javascript_96690a83df.svg"
              alt="javascript"
            />
            <p>JavaScript</p>
          </div>
          <div>
            <img
              className={styles.skillsimage}
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/react_fd582ea59b.svg"
              alt="react"
            />
            <p>React</p>
          </div>
          <div>
            <img
              className={styles.skillsimage}
              src="data:image/png;base64,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"
              alt="chakra-Ui"
            />
            <p>Chakra-UI</p>
          </div>
          <div>
            <img
              className={styles.skillsimage}
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/redux_f650f4cdbb.svg"
              alt="redux"
            />
            <p>Redux</p>
          </div>
          <div>
            <img
              className={styles.skillsimage}
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/nodejs_07d5eaa3a7.svg"
              alt="node-js"
            />
            <p>Node.js</p>
          </div>
          <div>
            <img
              className={styles.skillsimage}
              src="data:image/png;base64,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"
              alt="typescript"
            />
            <p>TypeScript</p>
          </div>
          <div>
            <img
              className={styles.skillsimage}
              src="data:image/jpeg;base64,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"
              alt="Cypress"
            />
            <p>Cypress</p>
          </div>
          <div>
            <img
              className={styles.skillsimage}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAADsCAMAAAA/3KjXAAAAulBMVEX////GPRT02M/AHwDDMADGPBLDLwDENADCKwDBJgD//fz9+PbFOQ/BJQD45+H++vj78u/03dfLOAD57enHPADdjnjswrfENgfjqJruyb/dlYb45d/MWD/RalPHPQzvzcXbkIDWc1bNXkbKUDTWfGnYfWTgn5HHRinntarUblHLTCTYgWvHQiLekXvquq3lraDRYT+8AADLTCPMUy3Scl7PWjnWd13ZgWnfm43PZE7JTC7UcFLQZUfSbVn4U/l+AAAOjklEQVR4nO1da3eqOhMWzA2NqC9q8FK11lpbrfa0tVs93f//b71gL6JAmKAGzlo+n5WVSSaTycwzk0LhiiuuuOKKK6644r+DsqkbWsSyjX+KOvHPpxaxyh1kaAQmLS1iFVocaxRLbLt6xOqOhEaxSLOsR6yCTi3EQpMO6tVC0avrEqu81aeFqFnSJVahaekTa6FNqoJZ0aWF4qGmT6zqmy4tZPf6pCoUhkyTWEVtdtCH2edapBKvVZ1iOTdUi1jkWZ8d9FCaEB1SYdrWKVWh0DZ0aKHoafIHf1DTooVorVUHPaw12EJsaLWDPkx2+RNZjGzdYhXeLu/Gs2ftUhXWl/cLrYF+sero0rZQvOqXqlD+vLQWslkGYhWW5LJGAxM9kbQjmPPLaiF90Xgn2cN5VzyRFWeBTHSfxV9w1TZXX83r5zgDO+jDfFAZJ71p3Sn9/q+TjVglJb8QuYWmisOFJtlIVShMivBRiq1dqBfhthMbmu8ke9gKkZpKx/vDPXy56KeuYG4YL2CjwRu+ta7DrUZlnZlUhSV49tlulOUm9FKNK9qCuWF0obMvnr6uuW3oES6espOqULuHaSFG7tfRWmoC1ZZlZgd9TCnIaOzzAwMOWi7ez1AHvRMZdsKS/f6/Be0u9DcTf/AH5THkROZ8H0AyIWcXJm6GQnlYQvbK7sz6wT1gufhDJneSPeoA08b7wUjLgCb/g75nqoMebpOXiwUXq1AbJ/+DZGoHfUwT/UKxPbRqrcSLFzcy1kFv8htJg0RH18Fq4nIhPQQTKT4STIC4Oz6CWkmR00rGdtDHImGQrBn6y0q+XJzoD+aG0JWn/TkKj7FtSWeCPGYTxDhAeSideyu8WIWq1HxiNtUvRRgLIZl73o/KULVkriR/ytQf/EH9TqKFbBilUM5fic+FxlmfxV+Q3A2Pz6wfSOhFmOZCB31bGD/znejdX44PWvG7zM/iL9Ri3QY8jxviItY5Qfc5sIM7fMQtlxWf83iNWy5rqXHkUsSdQ5zFn6txpzinGQVzw6g9RdtCWYKqtoleLvKob9wJqEbbQi5kB9A0Oj1WyYkd9NGOPF5JR0ZYsiONITdyo4MxpGS+lVvqaZRYZKaVuyVHNYqUjJryEdZWYbkw1U4wkWER9hqwSEq7ueGzK3w5yxROWAvZn6Q/lcIGFA1zpIOFCFIyJ8nzvjw+uzDXSDiGoH2sUBBShd072l3iLgf34gM0DhWK9yEOq3t0diUrrm4c5YUJaJPYR1tSL+EYgsHBxPM5jH3gHkwGb2SXWI2BcxBOImOYRasZweXSS3oHoboO+IWYQa+C60rwX5kl9+MxCFwm2Qf0X87rfrnEKkf+4A8CritX4Ja5+7MLZmZ0Y+8XQneWj/pv9FRjAZoK2sb3vKslPCY/s0E3eTuLdyiPvrWQzlQCfb9hRjS81MhOw/OXX6jKXu98u5P51MHfYjX0oRYRcyo7Eyq2+QjmhvHmayEuqoYvv/wuKwPSOwy7Ag310FHXP/GwlZNgbhhmg3tnljIXtdoh2gvQVOD8rVA2VndXzQchisPzj+dcMDt/tyn8utKQ9ca5CmIcwzHT2LP6op5bFbziiiuuuOKKy6JU65qDulM6MbVeKtdby2XLrJ34naozWCwXbfukk9kxOy99VrEs+jZr2alHVKpPbxtWxUfjcZneWaiZnTe6+wx7mrXThqDKi3fKEMcGxlwQ0pukLJ7vrreMfCW3MEfsqZPStWuNMaO77/jjQTfTVHfK7jsPMoExRb1UV+5FjwSJXFiQuzQp7drQOCj3xVTcpJjnhRFKs1PrWXmCSk0rlHgTFXUWjDmyjnk4mKjX8y95RAYbWzNFja41o6j6uKgUePIw2EbxH6ihuO4LEckOwYrly+V1TOExGSrdJO1Iqbx1x0rr1Y2Wyp9nJbpRK46nz5HKPFfHcYwpqsLRqG1iGaXcUIhD2I1YdiQkb/wLN562xz7g58VSwkFVIV7OJB0Y4BkTKXdUIZAq7fnDOXi5urJSEYVyfFfGN4dPczQ96Qckgfmyh7xpCxsCP1N+k1VKcQycntJMWmQg+sDpSWixA263MpBT4qG1hOUY6t83MLShiLmVlpZAU+K/eYUYoEeY9nSJvNKlApyehM6LmALpMAk1heIVdgS2Ewq7oYSPZUKtJwJWv0Sw1IKIKuWIwiKhMQ75FzacpKYSwcZTpbKHasnH8Weq8j3heT6wE3BZkX4GnO9wUcJqBYq2Ws3hsDnseFhPXNeduHvnIWGre3sdJlbiat3CxFrCxap2KpTS/+1RDITpE/o3YgK7n5hygxpZwBM5PbJ6mcOKivJxZXgxYE4S2g9x4IHjJNSRQsn1g7lULB5we0I1nsFiuoTmqPQFZuCr8l4Q0C0a4pYdIdgN1/k8snZBjVjI9zoDtl0syZ0euoJeleQtIlDg6ma/HikICuzfWl82PRhBs2WmrDwWM3Cx5UBaEmkFXO/28S+DHM/Ss2ya6QZ646rNJFoYV24VhU/JcqFVQHdCAz9oMzOQTTOFl7TKOnEwhe6Ng0rsd/ABizPsowebAlWH8dNDewrX407sLqUjhc+UOrFqyILXm4iWCwctnLrHPORfcEslD12NUx+BlKgRznvMd9BNcHYiTDjnwfEOWPSyc6bWZafeixyPEIok9G4vcruTg8oDO+pSf9i6fhl5q8DsWZEKYa4iDkGqFC/awXkN3wew1TjwdyJ9Yt4ISl5aorAe8mJTORzrzMjRxYKzXgpyTrXJD31DTMVh8NOMjsCww2YE5ogdOmMczVPVLyxHaD8gLNh8mIqjWG39JeTnRok5IZvFgeaUYnp24+KhNXDWW/br1nnDMZopGVD29JNYDFFBiWU9dcy0GRyndd+3LEYIs6z+x+JoctpxLig9CnaU6u7KGwjxvlNhT8NBekJ8ue7ev7y9rW477ZMSbmWn1fnz77/3nYVzPJhabL2qgY4j2qVaffr88Xg7c81avik1tdt4z0jBT8sZ5L0ZeL4K6+B4lt/thErEPz9ohnJxIblyVoQGQPc+ufmzIJO80o5j0BpBeqVxNpOHYJxcVZ04HQPW7RSjnsxla49iGlNkgJIzMRLiW0FFrDy1o8/esvlRZA2V5SrXL1bW5pjuUzj/LwNij9PQeEp2a9zwLnRKLZ9ad7NlKlKtHNVue/I+J6ov0mCK7prLwX5dauais6E7poZKg66y58DTee9jfR7JzI/mejJZP99v7gxE0zxihYU/ntvZ82Qy6cw+Rg8Cfd8wuAGPrrT9TpVcFM/TstHZVJhPerJIKpH2oqGvzzAkAgcevAFj9Tsj+dNn9DSUJhdtd49m0EGaX07NmarbzPlFX3eCF6t9d8RJ6mcBQzWhz9upAI/y500wMTrHSzXNhITZqcAcqFM/Zepnabi+gDXWPUEsYJOu3xw9TVG7cwxp/7TziAUzbLtiqXOJZYMc2tOApI16fuf39yWB08UqxZLLzggYjW/yO5LTxXIVuvFfVqxAy4OTxdLz2CdIrPW+ucqprYbbWMsri2idvLfKAcLAia9bmVstD86CLOEiMJTT+hvaPT3P6ELOrXLw/Rt+ypMa9kbLU4Swhz8OEqwYpW9wWL/RJBVEp/ZH8Q4o9bvPtjapIC6ec+jqpG6S4tzoepLVn/vE4UwPk9hYvU59h+5Gn1QGSY78HufCI7pkA2DKGBnnBp8napR9nFIX/RSby7zTKBWEUR/uB1hUj+23t3rezv3CcTI2Co+hAdGe4nJVl0SnVAb6THQxzIewZyrUSAu1Tgw15ELAAIOxjJhntYu/PdYrFWR41ahXh5Q8jcEqgaB7bkDCM5FNYj1jCA0Gl12mdVsZ/gGU7LzHEPegDxvUZ5oV0E/CAnbINEaDYKmWaU+zAvq8O0CEsBxHR+SA7qj2vVrK6hzgoEhaXEdvz9xsE1xDZ/qm0Qn8BoZFnJz4sgckv9IM3pH2pfIcIFiZb13C/UCSlsrO81z7rvKdpluY/yN9mIfOY1yv2polkUYuAU6hjSUldbAe0DzKi+ouV1kIZSBjCa4ykJNaBAolkm13FEE2vTy4tYJfb2Nfr/gGJpsDw2F37tClkzyR40DiWcFPTX4+lbDf7zmDP0z/SWX4h5XxrhS9TChr233TGi1tn73ibqh2T8mHYP1ZS+0GaEAmn4rRcjreIsBjgWcHZ8V+s66aFkh8gm4HTNFp7IpUwJwi/vCxUE91VGFiaQfmAiGxfe8cc7JhKOVPLE8gxkh/NXZbZtrkfI7E8haIMqtYZI2XP+6g65zCVs+DWL48yDvhH3o3s84i9QodQFqDqEMkSkhjezNeTz2VOx+l8zVDsbCndPSzuRzU7XOTGOGPtJ9ZJEEYWjVbTvkiFRZJb4xeRiaKjF5zeg5uVQwSPPhLQDA0WrcuKFPBf7hGr0ycFI1mO30nPSDk5c9nBqZkfqvotKaD3dd2cHHEb1xNvZprL5puupwZnt3TI5TftUKHKcS02Gh2dT6Jc3Ge5k77NuDgypmQ0JnpDEIxY7zQLJTfZOSim4szOhtkUY3lXnBzCU+ojFq67+msZxeK3jWzezHmz2UcDcHuJlm+KDC4BLVWVIx1N9uSuMdz7y7v1jGfZF6+aPKz7i4sUG+dg1eYZH1f1CHYm3vZWwcUZ6ydEEXDzXhP7bGI6fCrCEzpnZunxxCHZ7gke7epjZuDPRVA7e/Jhxdlq2m+hCr4HKGT5PJuHm/TzE16BLon8Ic5Mm7y2jXBvkkZ1uBEzFr5bZlgz9Lk70Wl0czk5gFG2eWKV2VOyVPn4tGxk2FuFAg/npNkjNO96aAbjrsFZr05YatOTO+H/KHUbVaStxhHRfLZCvVvyjXqzS2Jz+n7STY6v13m8ZBKQH1yY0RJtnsiBfeay9y+5ZgAe+B+9hkjiHPsg3O/qRqjbzO3/Z9+Rq9U67Y7j08Nv1uFxQjtv912WnWnnHtrDkPN7ta7Xfs/ZR2uuOKKK6644oorzon/A2zFFwGcIJ+dAAAAAElFTkSuQmCC"
              alt="Jest"
            />
            <p>JEST</p>
          </div>
        </div>
      </div>
    </div>
  );
};
