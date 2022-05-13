import React from "react";
import { Button, Loading } from "@nextui-org/react";
import Title from "../components/Title";
import LoginModal from "../components/LoginModal";

import { useRecoilState } from 'recoil';
import { gradeData } from '../utils/states';

export default function Home() {
  const [grade, setGradeData] = useRecoilState(gradeData);

  return (
      <div>
        	<Title title="한움" />
            <div>
                {
                    grade === 'loading' ?
                        <Loading size="xl" className="loading" />
                    :
                        grade
                }
            </div>

            <style jsx>{`
                .loading {
                    display: flex;
                    self-direction: center;
                    justify-self: center;
                }
            `}</style>
      </div>
  );
}
