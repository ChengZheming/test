package com.haylion.entity;

public class Module {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_module.id
     *
     * @mbggenerated Sat Mar 24 10:25:35 CST 2018
     */
    private Integer id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_module.moduleName
     *
     * @mbggenerated Sat Mar 24 10:25:35 CST 2018
     */
    private String modulename;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_module.id
     *
     * @return the value of t_module.id
     *
     * @mbggenerated Sat Mar 24 10:25:35 CST 2018
     */
    private Integer typeid;
    
    private String typename;
    
    
    public Integer getTypeid() {
		return typeid;
	}

	public void setTypeid(Integer typeid) {
		this.typeid = typeid;
	}

	public String getTypename() {
		return typename;
	}

	public void setTypename(String typename) {
		this.typename = typename;
	}

	public Integer getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_module.id
     *
     * @param id the value for t_module.id
     *
     * @mbggenerated Sat Mar 24 10:25:35 CST 2018
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_module.moduleName
     *
     * @return the value of t_module.moduleName
     *
     * @mbggenerated Sat Mar 24 10:25:35 CST 2018
     */
    public String getModulename() {
        return modulename;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_module.moduleName
     *
     * @param modulename the value for t_module.moduleName
     *
     * @mbggenerated Sat Mar 24 10:25:35 CST 2018
     */
    public void setModulename(String modulename) {
        this.modulename = modulename == null ? null : modulename.trim();
    }

	@Override
	public String toString() {
		return "Module [id=" + id + ", modulename=" + modulename + ", typeid=" + typeid + ", typename=" + typename
				+ "]";
	}
}