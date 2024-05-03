import { useThemeContext } from "../hooks/useThemeContext";
import "./CardInformation.css";
import icon_avatar from "../assets/img-user.png";

const CardInformation = ({ userData, isPending, isFound }) => {
  const { isDark } = useThemeContext();
  console.log("data ", userData);
  console.log("isFound", isFound);

  const transDate = (dateOriginal) => {
    let fecha = new Date(dateOriginal);
    let meses = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let año = fecha.getFullYear();

    let cadenaFormateada = dia + " " + mes + " " + año;

    return cadenaFormateada;
  };

  return isFound.err !== true ? (
    isPending !== false ? (
      <div className={`card-content ${isDark ? "dark" : "light"}`}>
        <div className="notFound">
          <h1 className={`notFound-tittle ${isDark ? "dark_t" : "light_t"}`}>
            Loading data...
          </h1>
        </div>
      </div>
    ) : (
      <div className={`card-content ${isDark ? "dark" : "light"}`}>
        <div className="section-1">
          <img
            className="icon-user"
            src={userData ? userData.avatar_url : icon_avatar}
            alt=""
          />
        </div>
        <div className="section-2">
          <div className="el-1">
            <img
              className="icon-user tableMobile"
              src={userData ? userData.avatar_url : icon_avatar}
              alt=""
            />
            <div className="section-2-el1">
              <p className={`t_username ${isDark ? "dark_t" : "light_t"}`}>
                {userData.name !== null ? `${userData.name}` : `Not name`}
              </p>
              <p className="t_login tableMobile">
                @
                {userData.login !== null
                  ? `${userData.login}`
                  : `loginNotFound`}
              </p>
              <p className={`t_create-at ${isDark ? "dark_t" : "light_t"}`}>
                Joined {userData ? `${transDate(userData.created_at)}` : `????`}
              </p>
            </div>
          </div>
          <p className="t_login">
            @{userData.login !== null ? `${userData.login}` : `loginNotFound`}
          </p>
          <p className={`t_bio ${isDark ? "dark_t" : "light_t"}`}>
            {userData.bio !== null ? userData.bio : `This profile has no bio`}
          </p>
          <div className={`el-2 ${isDark ? "dark" : "light"}`}>
            <div className="box repos">
              <p className={`t_box ${isDark ? "dark_t" : "light_t"}`}>Repos</p>
              <p className={`n_box ${isDark ? "dark_t" : "light_t"}`}>
                {userData.public_repos !== null ? userData.public_repos : `--`}
              </p>
            </div>
            <div className="box followers">
              <p className={`t_box ${isDark ? "dark_t" : "light_t"}`}>
                Followers
              </p>
              <p className={`n_box ${isDark ? "dark_t" : "light_t"}`}>
                {userData.followers !== null ? userData.followers : `--`}
              </p>
            </div>
            <div className="box following">
              <p className={`t_box ${isDark ? "dark_t" : "light_t"}`}>
                Following
              </p>
              <p className={`n_box ${isDark ? "dark_t" : "light_t"}`}>
                {userData.following !== null ? userData.following : `--`}
              </p>
            </div>
          </div>
          <div className="extraData">
            <div
              className={`extra-cont location ${
                userData.location === null ? "not_available" : ""
              }`}
            >
              <svg
                className={`data_ico ${isDark ? "dark_i" : "light_i"}`}
                height="20"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z" />
              </svg>
              <p className={`extraData_title ${isDark ? "dark_t" : "light_t"}`}>
                {userData.location !== null ? userData.location : `Not Avaible`}
              </p>
            </div>
            <div
              className={`extra-cont website ${
                userData.blog === "" ? "not_available" : ""
              }`}
            >
              <svg
                className={`data_ico ${isDark ? "dark_i" : "light_i"}`}
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z" />
                  <path d="M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z" />
                </g>
              </svg>
              {userData.blog !== "" ? (
                <a
                  className={`extraData_title link ${
                    isDark ? "dark_t" : "light_t"
                  }`}
                  href={userData.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {userData.blog}
                </a>
              ) : (
                <p
                  className={`extraData_title link ${
                    isDark ? "dark_t" : "light_t"
                  }`}
                >
                  Not Available
                </p>
              )}
            </div>
            <div
              className={`extra-cont twitter ${
                userData.twitter_username === null ? "not_available" : ""
              }`}
            >
              <svg
                className={`data_ico ${isDark ? "dark_i" : "light_i"}`}
                height="18"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z" />
              </svg>
              <p className={`extraData_title ${isDark ? "dark_t" : "light_t"}`}>
                {userData.twitter_username !== null
                  ? userData.twitter_username
                  : "Not Available"}
              </p>
            </div>
            <div
              className={`extra-cont company ${
                userData.company === null ? "not_available" : ""
              }`}
            >
              <svg
                className={`data_ico ${isDark ? "dark_i" : "light_i"}`}
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z" />
                </g>
              </svg>
              <p className={`extraData_title ${isDark ? "dark_t" : "light_t"}`}>
                {userData.company !== null ? userData.company : "Not Available"}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  ) : (
    <div className={`card-content ${isDark ? "dark" : "light"}`}>
      <div className="notFound">
        <svg
          className={`icon-userNotFound ${isDark ? "dark_i" : "light_i"}`}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlSpace="preserve"
          version="1.1"
          style={{
            shapeRendering: "geometricPrecision",
            textRendering: "geometricPrecision",
            imageRendering: "optimizeQuality",
          }}
          viewBox="100 100 460 460"
          x="0px"
          y="0px"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <g>
            <path
              className="fil0"
              d="M328 206c26,0 49,10 66,27 17,17 27,40 27,66 0,25 -10,49 -27,65 -6,6 -12,11 -19,15 1,0 3,0 4,1 14,4 27,10 40,17 13,-10 29,-16 47,-16 10,0 20,2 29,5 2,-6 3,-12 4,-19 2,-10 3,-20 3,-30 0,-47 -19,-90 -51,-120 -31,-31 -75,-50 -123,-50 -48,0 -91,19 -123,50 -31,30 -50,73 -50,120 0,39 13,74 35,103 15,-20 34,-36 56,-47 11,-6 23,-11 35,-14 -6,-4 -13,-9 -18,-15 -17,-16 -27,-40 -27,-65 0,-26 10,-49 27,-66 17,-17 40,-27 65,-27zm112 231c-3,-5 -2,-11 2,-14 4,-3 10,-2 13,2l11 14 11 -14c3,-4 9,-5 13,-2 4,3 5,9 2,14l-14 18 14 19c3,4 2,10 -2,13 -4,3 -10,3 -13,-2l-11 -14 -11 14c-3,5 -9,5 -13,2 -4,-3 -5,-9 -2,-13l14 -19 -14 -18zm-35 -25c-10,-6 -21,-11 -32,-14 -14,-4 -29,-6 -45,-6 -26,0 -51,6 -73,18 -21,11 -38,26 -52,44 1,1 1,2 2,3 32,31 75,50 123,50 15,0 29,-2 42,-5 11,-3 21,-6 30,-10 -6,-11 -10,-24 -10,-37 0,-16 6,-31 15,-43zm7 95c-12,6 -24,10 -37,13 -15,4 -31,6 -47,6 -53,0 -101,-21 -136,-55 -35,-35 -57,-82 -57,-134 0,-52 22,-100 57,-134 35,-34 83,-55 136,-55 53,0 102,21 137,55 35,34 56,82 56,134 0,11 -1,22 -3,34 -2,8 -4,17 -6,25 2,2 5,4 8,7 13,13 22,32 22,52 0,21 -9,39 -22,53 -14,13 -33,22 -54,22 -21,0 -40,-9 -53,-22l-1 -1zm94 -91c-10,-10 -24,-16 -40,-16 -16,0 -30,6 -40,16 -10,10 -16,24 -16,39 0,15 6,29 16,39 10,10 24,16 40,16 16,0 30,-6 40,-16 10,-10 17,-24 17,-39 0,-15 -7,-29 -17,-39zm-126 -169c-13,-14 -31,-22 -52,-22 -20,0 -38,8 -52,22 -13,13 -21,32 -21,52 0,20 8,39 21,52 14,13 32,21 52,21 21,0 39,-8 52,-21 14,-13 22,-32 22,-52 0,-20 -8,-39 -22,-52zm-52 125l0 0 0 0z"
            />
          </g>
        </svg>

        <h1 className={`notFound-tittle ${isDark ? "dark_t" : "light_t"}`}>
          El usuario no existe
        </h1>
      </div>
    </div>
  );
};

export default CardInformation;
