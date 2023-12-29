import objectPath from "object-path";
import { Actions } from "@/stores/enums/StoreEnums";
import { config } from "@/core/helpers/config";
import { useBodyStore } from "~/stores/BodyModule";

class LayoutService {
  private static bodyStore = useBodyStore()
  /**
   * @description initialize default layout
   */
  public static init(): void {
    LayoutService.initLayout();
    LayoutService.initHeader();
    LayoutService.initToolbar();
    LayoutService.initAside();
    LayoutService.initFooter();
  }

  /**
   * @description init layout
   */
  public static initLayout(): void {
    this.bodyStore[Actions.ADD_BODY_ATTRIBUTE]({
      qulifiedName: "id",
      value: "kt_body"
    });
    if (objectPath.get(config.value, "loader.display")) {
      this.bodyStore[Actions.ADD_BODY_CLASSNAME]("page-loading-enabled");
      this.bodyStore[Actions.ADD_BODY_CLASSNAME]("page-loading");
    }
    this.bodyStore[Actions.ADD_BODY_ATTRIBUTE]({
      qulifiedName: "style",
      value: "background-image: url(media/patterns/header-bg.jpg)"
    });
  }

  /**
   * @description init header
   */
  public static initHeader(): void {
    if (objectPath.get(config.value, "header.fixed.desktop")) {

      this.bodyStore[Actions.ADD_BODY_CLASSNAME]("header-fixed");
    }

    if (objectPath.get(config.value, "header.fixed.tabletAndMobile")) {
      this.bodyStore[Actions.ADD_BODY_CLASSNAME]("header-tablet-and-mobile-fixed")
    }
  }

  /**
   * @description init toolbar
   */
  public static initToolbar(): void {
    if (!objectPath.get(config.value, "toolbar.display")) {
      return;
    }

    this.bodyStore[Actions.ADD_BODY_CLASSNAME]("toolbar-enabled");

    if (objectPath.get(config.value, "toolbar.fixed")) {
      this.bodyStore[Actions.ADD_BODY_CLASSNAME]("toolbar-fixed");
    }

    this.bodyStore[Actions.ADD_BODY_CLASSNAME]("toolbar-tablet-and-mobile-fixed");
  }

  /**
   * @description init aside
   */
  public static initAside(): void {
    if (!objectPath.get(config.value, "aside.display")) {
      return;
    }

    // Enable Aside
    this.bodyStore[Actions.ADD_BODY_CLASSNAME]("aside-enabled");
  }

  /**
   * @description init footer
   */
  public static initFooter(): void {
    // Fixed header
    if (objectPath.get(config.value, "footer.width") === "fixed") {
      this.bodyStore[Actions.ADD_BODY_CLASSNAME]("footer-fixed");
    }
  }
}

export default LayoutService;
