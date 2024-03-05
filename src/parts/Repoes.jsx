import React, { useEffect, useState } from "react";
import TitlePart from "../components/TitlePart";
import axios from "axios";
import RepoPart from "../components/RepoPart";

function Repoes() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fxtch = async () => {
      try {
        const res = await axios.get(
          "https://api.github.com/users/cwpslxck/repos"
        );
        setRepos(res.data);
      } catch (error) {
        console.error("We have an error: ", error);
      }
    };
    fxtch();
  }, []);
  return (
    <div className="py-4 w-full">
      <TitlePart title={"آخرین ریپازیتوری ها"} />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {repos.map(
          (repo, index) =>
            index < 3 && (
              <RepoPart key={repo.id} repo={repo.name} url={repo.html_url} />
            )
        )}
      </div>
    </div>
  );
}

export default Repoes;
