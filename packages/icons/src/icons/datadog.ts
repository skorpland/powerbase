import createPowerbaseIcon from '../createPowerbaseIcon';

/**
 * @component @name Datadog
 * @description Powerbase SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiMwMDAiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBib3JkZXItcmFkaXVzOiAycHgiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIwIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xOS41NyAxNy4wNGwtMS45OTctMS4zMTYtMS42NjUgMi43ODItMS45MzctLjU2Ny0xLjcwNiAyLjYwNC4wODcuODIgOS4yNzQtMS43MS0uNTM4LTUuNzk0em0tOC42NDktMi40OThsMS40ODgtLjIwNGMuMjQxLjEwOC40MDkuMTUuNjk3LjIyMy40NS4xMTcuOTcuMjMgMS43NDEtLjE2LjE4LS4wODguNTUzLS40My43MDQtLjYyNWw2LjA5Ni0xLjEwNi42MjIgNy41MjctMTAuNDQ0IDEuODgyem0xMS4zMjUtMi43MTJsLS42MDIuMTE1TDIwLjQ4OCAwIC43ODkgMi4yODVsMi40MjcgMTkuNjkzIDIuMzA2LS4zMzRjLS4xODQtLjI2My0uNDcxLS41ODEtLjk2LS45ODktLjY4LS41NjQtLjQ0LTEuNTIyLS4wMzktMi4xMjcuNTMtMS4wMjIgMy4yNi0yLjMyMiAzLjEwNi0zLjk1Ni0uMDU2LS41OTQtLjE1LTEuMzY4LS43MDItMS44OTgtLjAyLjIyLjAxNy40MzIuMDE3LjQzMnMtLjIyNy0uMjg5LS4zNC0uNjgzYy0uMTEyLS4xNS0uMi0uMTk5LS4zMTktLjQtLjA4NS4yMzMtLjA3My41MDMtLjA3My41MDNzLS4xODYtLjQzNy0uMjE2LS44MDdjLS4xMS4xNjYtLjEzNy40OC0uMTM3LjQ4cy0uMjQxLS42OS0uMTg2LTEuMDYyYy0uMTEtLjMyMy0uNDM2LS45NjUtLjM0My0yLjQyNC42LjQyMSAxLjkyNC4zMjEgMi40NC0uNDM5LjE3MS0uMjUxLjI4OC0uOTM5LS4wODYtMi4yOTMtLjI0LS44NjgtLjgzNS0yLjE2LTEuMDY2LTIuNjUxbC0uMDI4LjAyYy4xMjIuMzk1LjM3NCAxLjIyMy40NyAxLjYyNS4yOTMgMS4yMTguMzcyIDEuNjQyLjIzNCAyLjIwNC0uMTE2LjQ4OC0uMzk3LjgwOC0xLjEwNyAxLjE2NS0uNzEuMzU4LTEuNjUzLS41MTQtMS43MTMtLjU2Mi0uNjktLjU1LTEuMjI0LTEuNDQ3LTEuMjg0LTEuODgzLS4wNjItLjQ3Ny4yNzUtLjc2My40NDUtMS4xNTMtLjI0My4wNy0uNTE0LjE5Mi0uNTE0LjE5MnMuMzIzLS4zMzQuNzIyLS42MjRjLjE2NS0uMTA5LjI2Mi0uMTc4LjQzNi0uMzIzYTkuNzYyIDkuNzYyIDAgMCAwLS40NTYuMDAzcy40Mi0uMjI3Ljg1NS0uMzkyYy0uMzE4LS4wMTQtLjYyMy0uMDAzLS42MjMtLjAwM3MuOTM3LS40MTkgMS42NzgtLjcyN2MuNTA5LS4yMDggMS4wMDYtLjE0NyAxLjI4Ni4yNTcuMzY3LjUzLjc1Mi44MTcgMS41NjkuOTk2LjUwMS0uMjIzLjY1My0uMzM3IDEuMjg0LS41MDkuNTU0LS42MS45OS0uNjg4Ljk5LS42ODhzLS4yMTYuMTk4LS4yNzQuNTFjLjMxNC0uMjQ5LjY2LS40NTUuNjYtLjQ1NXMtLjEzNC4xNjQtLjI1OS40MjZsLjAzLjA0M2MuMzY2LS4yMi43OTctLjM5NC43OTctLjM5NHMtLjEyMy4xNTYtLjI2OC4zNThjLjI3Ny0uMDAyLjgzOC4wMTIgMS4wNTYuMDM3IDEuMjg1LjAyOCAxLjU1Mi0xLjM3NCAyLjA0NS0xLjU1LjYxOC0uMjIuODk0LS4zNTMgMS45NDcuNjguOTAzLjg4OCAxLjYwOSAyLjQ3NyAxLjI1OSAyLjgzMy0uMjk0LjI5NS0uODc0LS4xMTUtMS41MTYtLjkxNmEzLjQ2NiAzLjQ2NiAwIDAgMS0uNzE2LTEuNTYyIDEuNTMzIDEuNTMzIDAgMCAwLS40OTctLjg1cy4yMy41MS4yMy45NmMwIC4yNDYuMDMgMS4xNjUuNDI0IDEuNjgtLjAzOS4wNzYtLjA1Ny4zNzQtLjEuNDMtLjQ1OC0uNTU0LTEuNDQzLS45NS0xLjYwNC0xLjA2Ny41NDQuNDQ1IDEuNzkzIDEuNDY4IDIuMjczIDIuNDQ5LjQ1My45MjcuMTg2IDEuNzc3LjQxNiAxLjk5Ny4wNjUuMDYzLjk3NiAxLjE5NyAxLjE1IDEuNzY3LjMwNi45OTQuMDE5IDIuMDM4LS4zODEgMi42ODVsLTEuMTE3LjE3NGMtLjE2My0uMDQ1LS4yNzMtLjA2OC0uNDItLjE1My4wOC0uMTQzLjI0MS0uNS4yNDMtLjU3MmwtLjA2My0uMTExYy0uMzQ4LjQ5Mi0uOTMuOTctMS40MTQgMS4yNDUtLjYzMy4zNTktMS4zNjMuMzA0LTEuODM4LjE1Ni0xLjM0OC0uNDE1LTIuNjIzLTEuMzI3LTIuOTMtMS41NjYgMCAwLS4wMS4xOTEuMDQ4LjIzNC4zNC4zODMgMS4xMTkgMS4wNzcgMS44NzIgMS41NmwtMS42MDUuMTc3Ljc1OSA1LjkwOGMtLjMzNy4wNDgtLjM5LjA3MS0uNzU3LjEyNC0uMzI1LTEuMTQ3LS45NDYtMS44OTUtMS42MjQtMi4zMzItLjU5OS0uMzg0LTEuNDI0LS40Ny0yLjIxNC0uMzE0bC0uMDUuMDU5YTIuODUxIDIuODUxIDAgMCAxIDEuODYzLjQ0NGMuNjU0LjQxMyAxLjE4MSAxLjQ4MSAxLjM3NSAyLjEyNC4yNDguODIyLjQyIDEuNy0uMjQ4IDIuNjMyLS40NzYuNjYyLTEuODY0IDEuMDI4LTIuOTg2LjIzNy4zLjQ4MS43MDUuODc2IDEuMjUuOTUuODA5LjExIDEuNTc3LS4wMyAyLjEwNi0uNTc0LjQ1Mi0uNDY0LjY5LTEuNDM0LjYyOC0yLjQ1NmwuNzE0LS4xMDQuMjU4IDEuODM0IDExLjgyNy0xLjQyNHpNMTUuMDUgNi44NDhjLS4wMzQuMDc1LS4wODUuMTI1LS4wMDcuMzdsLjAwNC4wMTQuMDEzLjAzMi4wMzIuMDczYy4xNC4yODcuMjk1LjU1OC41NTIuNjk2LjA2Ny0uMDExLjEzNi0uMDE5LjIwNy0uMDIzLjI0Mi0uMDEuMzk1LjAyOC40OTIuMDguMDA5LS4wNDguMDEtLjExOS4wMDUtLjIyMi0uMDE4LS4zNjQuMDcyLS45ODItLjYyNi0xLjMwOC0uMjY0LS4xMjItLjYzNC0uMDg0LS43NTcuMDY4YS4zMDIuMzAyIDAgMCAxIC4wNTguMDEzYy4xODYuMDY2LjA2LjEzLjAyNy4yMDdtMS45NTggMy4zOTJjLS4wOTItLjA1LS41Mi0uMDMtLjgyMS4wMDUtLjU3NC4wNjgtMS4xOTMuMjY3LTEuMzI4LjM3Mi0uMjQ3LjE5MS0uMTM1LjUyMy4wNDcuNjYuNTExLjM4Mi45Ni42MzggMS40MzIuNTc1LjI5LS4wMzguNTQ2LS40OTcuNzI4LS45MTQuMTI0LS4yODguMTI0LS41OTgtLjA1OC0uNjk4bS01LjA3Ny0yLjk0MmMuMTYyLS4xNTQtLjgwNS0uMzU1LTEuNTU2LjE1Ni0uNTU0LjM3OC0uNTcxIDEuMTg3LS4wNDEgMS42NDYuMDUzLjA0Ni4wOTYuMDc4LjEzNy4xMDRhNC43NyA0Ljc3IDAgMCAxIDEuMzk2LS40MTJjLjExMy0uMTI1LjI0My0uMzQ1LjIxLS43NDUtLjA0NC0uNTQyLS40NTUtLjQ1Ni0uMTQ2LS43NDkiPjwvcGF0aD48L3N2Zz4=)
 *
 * @param {Object} props - Powerbase icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const Datadog = createPowerbaseIcon('Datadog', [
  [
    'path',
    {
      d: 'M19.57 17.04l-1.997-1.316-1.665 2.782-1.937-.567-1.706 2.604.087.82 9.274-1.71-.538-5.794zm-8.649-2.498l1.488-.204c.241.108.409.15.697.223.45.117.97.23 1.741-.16.18-.088.553-.43.704-.625l6.096-1.106.622 7.527-10.444 1.882zm11.325-2.712l-.602.115L20.488 0 .789 2.285l2.427 19.693 2.306-.334c-.184-.263-.471-.581-.96-.989-.68-.564-.44-1.522-.039-2.127.53-1.022 3.26-2.322 3.106-3.956-.056-.594-.15-1.368-.702-1.898-.02.22.017.432.017.432s-.227-.289-.34-.683c-.112-.15-.2-.199-.319-.4-.085.233-.073.503-.073.503s-.186-.437-.216-.807c-.11.166-.137.48-.137.48s-.241-.69-.186-1.062c-.11-.323-.436-.965-.343-2.424.6.421 1.924.321 2.44-.439.171-.251.288-.939-.086-2.293-.24-.868-.835-2.16-1.066-2.651l-.028.02c.122.395.374 1.223.47 1.625.293 1.218.372 1.642.234 2.204-.116.488-.397.808-1.107 1.165-.71.358-1.653-.514-1.713-.562-.69-.55-1.224-1.447-1.284-1.883-.062-.477.275-.763.445-1.153-.243.07-.514.192-.514.192s.323-.334.722-.624c.165-.109.262-.178.436-.323a9.762 9.762 0 0 0-.456.003s.42-.227.855-.392c-.318-.014-.623-.003-.623-.003s.937-.419 1.678-.727c.509-.208 1.006-.147 1.286.257.367.53.752.817 1.569.996.501-.223.653-.337 1.284-.509.554-.61.99-.688.99-.688s-.216.198-.274.51c.314-.249.66-.455.66-.455s-.134.164-.259.426l.03.043c.366-.22.797-.394.797-.394s-.123.156-.268.358c.277-.002.838.012 1.056.037 1.285.028 1.552-1.374 2.045-1.55.618-.22.894-.353 1.947.68.903.888 1.609 2.477 1.259 2.833-.294.295-.874-.115-1.516-.916a3.466 3.466 0 0 1-.716-1.562 1.533 1.533 0 0 0-.497-.85s.23.51.23.96c0 .246.03 1.165.424 1.68-.039.076-.057.374-.1.43-.458-.554-1.443-.95-1.604-1.067.544.445 1.793 1.468 2.273 2.449.453.927.186 1.777.416 1.997.065.063.976 1.197 1.15 1.767.306.994.019 2.038-.381 2.685l-1.117.174c-.163-.045-.273-.068-.42-.153.08-.143.241-.5.243-.572l-.063-.111c-.348.492-.93.97-1.414 1.245-.633.359-1.363.304-1.838.156-1.348-.415-2.623-1.327-2.93-1.566 0 0-.01.191.048.234.34.383 1.119 1.077 1.872 1.56l-1.605.177.759 5.908c-.337.048-.39.071-.757.124-.325-1.147-.946-1.895-1.624-2.332-.599-.384-1.424-.47-2.214-.314l-.05.059a2.851 2.851 0 0 1 1.863.444c.654.413 1.181 1.481 1.375 2.124.248.822.42 1.7-.248 2.632-.476.662-1.864 1.028-2.986.237.3.481.705.876 1.25.95.809.11 1.577-.03 2.106-.574.452-.464.69-1.434.628-2.456l.714-.104.258 1.834 11.827-1.424zM15.05 6.848c-.034.075-.085.125-.007.37l.004.014.013.032.032.073c.14.287.295.558.552.696.067-.011.136-.019.207-.023.242-.01.395.028.492.08.009-.048.01-.119.005-.222-.018-.364.072-.982-.626-1.308-.264-.122-.634-.084-.757.068a.302.302 0 0 1 .058.013c.186.066.06.13.027.207m1.958 3.392c-.092-.05-.52-.03-.821.005-.574.068-1.193.267-1.328.372-.247.191-.135.523.047.66.511.382.96.638 1.432.575.29-.038.546-.497.728-.914.124-.288.124-.598-.058-.698m-5.077-2.942c.162-.154-.805-.355-1.556.156-.554.378-.571 1.187-.041 1.646.053.046.096.078.137.104a4.77 4.77 0 0 1 1.396-.412c.113-.125.243-.345.21-.745-.044-.542-.455-.456-.146-.749',
      key: '13qbml',
    },
  ],
]);

export default Datadog;
