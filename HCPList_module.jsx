import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/HCPList/HCPList.jsx");const useEffect = __vite__cjsImport0_react["useEffect"]; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport6_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=2fb5985d";
import axios from "/node_modules/.vite/deps/axios.js?v=bde27ec5";
import Sidebar from "/src/components/Sidebar/Sidebar.jsx";
import Header from "/src/components/Header/Header.jsx";
import "/src/pages/HCPList/HCPList.css";
// Import background image so the bundler (Vite) resolves it correctly
import doc4 from "/src/assets/doc4.jpg?import";
var _jsxFileName = "D:/AI CRM HCP module/frontend/src/pages/HCPList/HCPList.jsx";
import __vite__cjsImport6_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=2fb5985d";
var _s = $RefreshSig$();
function HCPList() {
	_s();
	const [hcpData, setHcpData] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetchHCP();
	}, []);
	const fetchHCP = async () => {
		try {
			const response = await axios.get("http://127.0.0.1:8000/hcp");
			setHcpData(response.data);
		} catch (error) {
			console.log("Error fetching HCP:", error);
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "page-layout",
		style: { backgroundImage: `url(${doc4})` },
		children: [/* @__PURE__ */ _jsxDEV(Sidebar, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 56,
			columnNumber: 13
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "page-content",
			children: [/* @__PURE__ */ _jsxDEV(Header, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 60,
				columnNumber: 17
			}, this), /* @__PURE__ */ _jsxDEV("div", {
				className: "hcp-page",
				children: [/* @__PURE__ */ _jsxDEV("h1", { children: "Healthcare Professionals" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 21
				}, this), loading ? /* @__PURE__ */ _jsxDEV("p", { children: "Loading HCP data..." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 29
				}, this) : hcpData.length === 0 ? /* @__PURE__ */ _jsxDEV("p", { children: "No HCP records found" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 74,
					columnNumber: 29
				}, this) : /* @__PURE__ */ _jsxDEV("div", {
					className: "hcp-grid",
					children: hcpData.map((hcp) => /* @__PURE__ */ _jsxDEV("div", {
						className: "hcp-card",
						children: [
							/* @__PURE__ */ _jsxDEV("h2", { children: hcp.name }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 89,
								columnNumber: 45
							}, this),
							/* @__PURE__ */ _jsxDEV("p", { children: [
								/* @__PURE__ */ _jsxDEV("b", { children: "Hospital:" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 95,
									columnNumber: 49
								}, this),
								" ",
								hcp.hospital
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 94,
								columnNumber: 45
							}, this),
							/* @__PURE__ */ _jsxDEV("p", { children: [
								/* @__PURE__ */ _jsxDEV("b", { children: "Specialty:" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 100,
									columnNumber: 49
								}, this),
								" ",
								hcp.specialty
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 99,
								columnNumber: 45
							}, this),
							/* @__PURE__ */ _jsxDEV("p", { children: [
								/* @__PURE__ */ _jsxDEV("b", { children: "Department:" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 105,
									columnNumber: 49
								}, this),
								" ",
								hcp.department
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 104,
								columnNumber: 45
							}, this),
							/* @__PURE__ */ _jsxDEV("p", { children: [
								/* @__PURE__ */ _jsxDEV("b", { children: "Location:" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 110,
									columnNumber: 49
								}, this),
								" ",
								hcp.city,
								", ",
								hcp.state
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 109,
								columnNumber: 45
							}, this),
							/* @__PURE__ */ _jsxDEV("p", { children: [
								/* @__PURE__ */ _jsxDEV("b", { children: "Phone:" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 115,
									columnNumber: 49
								}, this),
								" ",
								hcp.phone
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 114,
								columnNumber: 45
							}, this),
							/* @__PURE__ */ _jsxDEV("p", { children: [
								/* @__PURE__ */ _jsxDEV("b", { children: "Email:" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 120,
									columnNumber: 49
								}, this),
								" ",
								hcp.email
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 119,
								columnNumber: 45
							}, this),
							/* @__PURE__ */ _jsxDEV("p", { children: [
								/* @__PURE__ */ _jsxDEV("b", { children: "Status:" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 125,
									columnNumber: 49
								}, this),
								" ",
								hcp.status
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 124,
								columnNumber: 45
							}, this),
							/* @__PURE__ */ _jsxDEV("p", { children: [
								/* @__PURE__ */ _jsxDEV("b", { children: "Notes:" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 130,
									columnNumber: 49
								}, this),
								" ",
								hcp.notes
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 129,
								columnNumber: 45
							}, this)
						]
					}, hcp.id, true, {
						fileName: _jsxFileName,
						lineNumber: 84,
						columnNumber: 41
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 79,
					columnNumber: 29
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 63,
				columnNumber: 17
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 58,
			columnNumber: 13
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 51,
		columnNumber: 9
	}, this);
}
_s(HCPList, "1XSLy+w0ol83PBFWLO6AYMZq2XM=");
_c = HCPList;
export default HCPList;
var _c;
$RefreshReg$(_c, "HCPList");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/HCPList/HCPList.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("D:/AI CRM HCP module/frontend/src/pages/HCPList/HCPList.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("D:/AI CRM HCP module/frontend/src/pages/HCPList/HCPList.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "D:/AI CRM HCP module/frontend/src/pages/HCPList/HCPList.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsU0FBUyxXQUFXLGdCQUFnQjtBQUNwQyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sWUFBWTtBQUNuQixPQUFPOztBQUdQLE9BQU8sVUFBVTs7OztBQUdqQixTQUFTLFVBQVU7O0NBRWYsTUFBTSxDQUFDLFNBQVMsY0FBYyxTQUFTLENBQUMsQ0FBQztDQUN6QyxNQUFNLENBQUMsU0FBUyxjQUFjLFNBQVMsSUFBSTtDQUczQyxnQkFBZ0I7RUFFWixTQUFTO0NBRWIsR0FBRyxDQUFDLENBQUM7Q0FHTCxNQUFNLFdBQVcsWUFBWTtFQUV6QixJQUFJO0dBRUEsTUFBTSxXQUFXLE1BQU0sTUFBTSxJQUN6QiwyQkFDSjtHQUVBLFdBQVcsU0FBUyxJQUFJO0VBRTVCLFNBQ00sT0FBTztHQUVULFFBQVEsSUFBSSx1QkFBdUIsS0FBSztFQUU1QyxVQUNRO0dBRUosV0FBVyxLQUFLO0VBRXBCO0NBRUo7Q0FHQSxPQUVJLHdCQUFDLE9BQUQ7RUFDSSxXQUFVO0VBQ1YsT0FBTyxFQUFFLGlCQUFpQixPQUFPLEtBQUssR0FBRztZQUY3QyxDQUtJLHdCQUFDLFNBQUQsQ0FBVTs7OztZQUVWLHdCQUFDLE9BQUQ7R0FBSyxXQUFVO2FBQWYsQ0FFSSx3QkFBQyxRQUFELENBQVM7Ozs7YUFHVCx3QkFBQyxPQUFEO0lBQUssV0FBVTtjQUFmLENBQ0ksd0JBQUMsTUFBRCxZQUFJLDJCQUE0Qjs7OztjQUk1QixVQUVJLHdCQUFDLEtBQUQsWUFBRyxzQkFBc0I7Ozs7ZUFFekIsUUFBUSxXQUFXLElBRW5CLHdCQUFDLEtBQUQsWUFBRyx1QkFBdUI7Ozs7ZUFLMUIsd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFHUCxRQUFRLEtBQUssUUFFVCx3QkFBQyxPQUFEO01BQ0ksV0FBVTtnQkFEZDtPQUtJLHdCQUFDLE1BQUQsWUFDSyxJQUFJLEtBQ0w7Ozs7O09BR0osd0JBQUMsS0FBRDtRQUNJLHdCQUFDLEtBQUQsWUFBRyxZQUFZOzs7OztRQUFDO1FBQUUsSUFBSTtPQUN2Qjs7Ozs7T0FHSCx3QkFBQyxLQUFEO1FBQ0ksd0JBQUMsS0FBRCxZQUFHLGFBQWE7Ozs7O1FBQUM7UUFBRSxJQUFJO09BQ3hCOzs7OztPQUdILHdCQUFDLEtBQUQ7UUFDSSx3QkFBQyxLQUFELFlBQUcsY0FBYzs7Ozs7UUFBQztRQUFFLElBQUk7T0FDekI7Ozs7O09BR0gsd0JBQUMsS0FBRDtRQUNJLHdCQUFDLEtBQUQsWUFBRyxZQUFZOzs7OztRQUFDO1FBQUUsSUFBSTtRQUFLO1FBQUcsSUFBSTtPQUNuQzs7Ozs7T0FHSCx3QkFBQyxLQUFEO1FBQ0ksd0JBQUMsS0FBRCxZQUFHLFNBQVM7Ozs7O1FBQUM7UUFBRSxJQUFJO09BQ3BCOzs7OztPQUdILHdCQUFDLEtBQUQ7UUFDSSx3QkFBQyxLQUFELFlBQUcsU0FBUzs7Ozs7UUFBQztRQUFFLElBQUk7T0FDcEI7Ozs7O09BR0gsd0JBQUMsS0FBRDtRQUNJLHdCQUFDLEtBQUQsWUFBRyxVQUFVOzs7OztRQUFDO1FBQUUsSUFBSTtPQUNyQjs7Ozs7T0FHSCx3QkFBQyxLQUFEO1FBQ0ksd0JBQUMsS0FBRCxZQUFHLFNBQVM7Ozs7O1FBQUM7UUFBRSxJQUFJO09BQ3BCOzs7OztNQUdGO1FBaERJLElBQUk7Ozs7WUFnRFIsQ0FFUjtJQUdKOzs7O1lBTVo7Ozs7O1dBR0o7Ozs7O1VBR0o7Ozs7OztBQUliOzs7QUFHQSxlQUFlIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkhDUExpc3QuanN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCBcIi4vSENQTGlzdC5jc3NcIjtcclxuXHJcbi8vIEltcG9ydCBiYWNrZ3JvdW5kIGltYWdlIHNvIHRoZSBidW5kbGVyIChWaXRlKSByZXNvbHZlcyBpdCBjb3JyZWN0bHlcclxuaW1wb3J0IGRvYzQgZnJvbSBcIi4uLy4uL2Fzc2V0cy9kb2M0LmpwZ1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEhDUExpc3QoKSB7XHJcblxyXG4gICAgY29uc3QgW2hjcERhdGEsIHNldEhjcERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGZldGNoSENQKCk7XHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICBjb25zdCBmZXRjaEhDUCA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgICAgICAgICAgXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvaGNwXCJcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHNldEhjcERhdGEocmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBmZXRjaGluZyBIQ1A6XCIsIGVycm9yKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG5cclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhZ2UtbGF5b3V0XCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7ZG9jNH0pYCB9fVxyXG4gICAgICAgID5cclxuXHJcbiAgICAgICAgICAgIDxTaWRlYmFyIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGVudFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoY3AtcGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5IZWFsdGhjYXJlIFByb2Zlc3Npb25hbHM8L2gxPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID8gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvYWRpbmcgSENQIGRhdGEuLi48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogaGNwRGF0YS5sZW5ndGggPT09IDAgPyAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Tm8gSENQIHJlY29yZHMgZm91bmQ8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhjcC1ncmlkXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGNwRGF0YS5tYXAoKGhjcCk9PihcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhjcC1jYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2hjcC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGNwLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5Ib3NwaXRhbDo8L2I+IHtoY3AuaG9zcGl0YWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlNwZWNpYWx0eTo8L2I+IHtoY3Auc3BlY2lhbHR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5EZXBhcnRtZW50OjwvYj4ge2hjcC5kZXBhcnRtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5Mb2NhdGlvbjo8L2I+IHtoY3AuY2l0eX0sIHtoY3Auc3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlBob25lOjwvYj4ge2hjcC5waG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+RW1haWw6PC9iPiB7aGNwLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5TdGF0dXM6PC9iPiB7aGNwLnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+Tm90ZXM6PC9iPiB7aGNwLm5vdGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIQ1BMaXN0OyJdfQ==
