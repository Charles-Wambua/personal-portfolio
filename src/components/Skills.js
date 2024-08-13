import React from "react";
import { Flex, Progress } from "antd";
import { green } from "@ant-design/colors";
import "./css/Skills.css";
import { useTheme } from "@mui/material/styles";

export const Skills = () => {
  const theme = useTheme();
  return (
    <div
      className="skills"
      id="skills"
      style={{
        marginRight: 0,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
    >
      <div className="title">
        <h3>Skills</h3>
      </div>
      <div className="categories">
        <div className="containers">
          <i className="devicon-javascript-plain  "></i>
          Javascript
          <Flex gap="small" vertical>
            <Progress
              percent={100}
              steps={5}
              size="small"
              strokeColor={green[6]}
            />
          </Flex>
        </div>
        <div className="containers">
          <i className="devicon-react-original"></i>
          ReactJs
          <Flex gap="small" vertical>
            <Progress
              percent={100}
              steps={5}
              size="small"
              strokeColor={green[6]}
            />
          </Flex>
        </div>
        <div className="containers">
          <i className="devicon-typescript-plain"></i>
          TypeScript
          <Flex gap="small" vertical>
            <Progress
              percent={100}
              steps={5}
              size="small"
              strokeColor={green[6]}
            />
          </Flex>
        </div>
        <div className="containers">
          <i className="devicon-react-original-wordmark  "></i>
          React Native
          <Flex gap="small" vertical>
            <Progress
              percent={100}
              steps={5}
              size="small"
              strokeColor={green[6]}
            />
          </Flex>
        </div>
        <div className="containers">
          <i className="devicon-django-plain  "></i>
          Django
          <Flex gap="small" vertical>
            <Progress
              percent={100}
              steps={5}
              size="small"
              strokeColor={green[6]}
            />
          </Flex>
        </div>
        <div className="containers">
          <i className="devicon-express-original  "></i>
          Express
          <Flex gap="small" vertical>
            <Progress
              percent={100}
              steps={5}
              size="small"
              strokeColor={green[6]}
            />
          </Flex>
        </div>
        <div className="containers">
          <i className="devicon-nodejs-plain-wordmark  "></i>
          Nodejs
          <Flex gap="small" vertical>
            <Progress
              percent={100}
              steps={5}
              size="small"
              strokeColor={green[6]}
            />
          </Flex>
        </div>
        <div className="containers">
          <i className="devicon-python-plain  "></i>
          Python
          <Flex gap="small" vertical>
            <Progress
              percent={100}
              steps={5}
              size="small"
              strokeColor={green[6]}
            />
          </Flex>
        </div>
        <div className="containers">
          <i className="devicon-mysql-plain  "></i>
          My SQL
          <Flex gap="small" vertical>
            <Progress
              percent={100}
              steps={5}
              size="small"
              strokeColor={green[6]}
            />
          </Flex>
        </div>
        <div className="containers">
          <i className="devicon-mongodb-plain  "></i>
          MongoDB
          <Flex gap="small" vertical>
            <Progress
              percent={100}
              steps={5}
              size="small"
              strokeColor={green[6]}
            />
          </Flex>
        </div>
        <div className="containers">
          <i className="devicon-tensorflow-original  "></i>
          TensorFlow
          <Flex gap="small" vertical>
            <Progress
              percent={100}
              steps={5}
              size="small"
              strokeColor={green[6]}
            />
          </Flex>
        </div>
        <div className="containers">
          <i className="devicon-docker-plain  "></i>
          Docker
          <Flex gap="small" vertical>
            <Progress
              percent={100}
              steps={5}
              size="small"
              strokeColor={green[6]}
            />
          </Flex>
        </div>
        <div className="containers">
          <i className="devicon-git-plain  "></i>
          Git
          <Flex gap="small" vertical>
            <Progress
              percent={100}
              steps={5}
              size="small"
              strokeColor={green[6]}
            />
          </Flex>
        </div>
      </div>
    </div>
  );
};
