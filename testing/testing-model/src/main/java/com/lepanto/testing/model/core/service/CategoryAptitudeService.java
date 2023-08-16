package com.lepanto.testing.model.core.service;

import com.lepanto.testing.api.core.service.ICategoryAptitudeService;
import com.lepanto.testing.model.core.dao.CategoryAptitudeDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Lazy
@Service("CategoryAptitudeService")
public class CategoryAptitudeService implements ICategoryAptitudeService {

    @Autowired
    private CategoryAptitudeDao categoryAptitudeDao;
    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;
    @Override
    public EntityResult categoryAptitudeQuery(Map<Object, String> keyMap, List<String> attrList) {
        return this.daoHelper.query(categoryAptitudeDao, keyMap, attrList, "categoryByAptitude");
    }

    @Override
    public EntityResult allCategoryAptitudeQuery(Map<Object, String> keyMap, List<String> attrList) {
        return this.daoHelper.query(categoryAptitudeDao, keyMap, attrList);
    }
}
