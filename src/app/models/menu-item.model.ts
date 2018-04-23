export class menuItemType {
    private _urlPagesID: number
    private _parentUrlPageID: number // nullable
    private _mainEntry: boolean
    private _pageName: string
    private _pageUrl: string
    private _iconPath: string
    private _urlPageSort: number
    private _isDefault: boolean
    private _rolePermission: number
    private _children: Array<menuItemType>

    // urlPagesID
    public get urlPagesID() : number {
        return this._urlPagesID
    }
    public set urlPagesID(v : number) {
        this._urlPagesID = v;
    }

    // parentUrlPageID
    public get parentUrlPageID() : number {
        return this._parentUrlPageID
    }
    public set parentUrlPageID(v : number) {
        this._parentUrlPageID = v;
    }


    // mainEntry
    public get mainEntry() : boolean {
        return this._mainEntry
    }
    public set mainEntry(v : boolean) {
        this._mainEntry = v;
    }

     // pageName
     public get pageName() : string {
        return this._pageName
    }
    public set pageName(v : string) {
        this._pageName = v;
    }

    // pageUrl
    public get pageUrl() : string {
        return this._pageUrl
    }
    public set pageUrl(v : string) {
        this._pageUrl = v;
    }

    // iconPath
    public get iconPath() : string {
        return this._iconPath
    }
    public set iconPath(v : string) {
        this._iconPath = v;
    }

     // urlPageSort
     public get urlPageSort() : number {
        return this._urlPageSort
    }
    public set urlPageSort(v : number) {
        this._urlPageSort = v;
    }

     // isDefault
     public get isDefault() : boolean {
        return this._isDefault
    }
    public set isDefault(v : boolean) {
        this._isDefault = v;
    }

    // rolePermission
    public get rolePermission() : number {
        return this._rolePermission
    }
    public set rolePermission(v : number) {
        this._rolePermission = v;
    }

     // children
     public get children() : Array<menuItemType> {
        return this._children
    }
    public set children(v : Array<menuItemType>) {
        this._children = v;
    }

    

    public menuItemType() {
        this.children = new Array<menuItemType>();
    }

}